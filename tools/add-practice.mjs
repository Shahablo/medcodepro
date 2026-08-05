// Generate an encrypted practice entry for upload.html's access-code gate.
//
//   node tools/add-practice.mjs "<box-file-request-url>" [access-code]
//
// If no access code is given, a strong 3-word one is generated. The output is
// a JSON entry to paste into the PRACTICES array in upload.html. The practice
// name is deliberately NOT stored anywhere in the page — the code is the only
// way to recover the link, so the page leaks neither URLs nor a client list.
//
// Crypto (identical to the browser side): PBKDF2-HMAC-SHA256 (310k iterations)
// over the normalized code + random salt -> AES-256-GCM over the URL.
import { webcrypto as crypto } from "node:crypto";

const WORDS = ("harbor,cedar,lantern,summit,copper,meadow,falcon,granite,willow,ember," +
  "prairie,anchor,birch,canyon,drift,alpine,juniper,cobalt,timber,quarry," +
  "beacon,orchard,slate,ridge,maple,harvest,glacier,aspen,laurel,pine").split(",");

function randomWord() { return WORDS[crypto.getRandomValues(new Uint32Array(1))[0] % WORDS.length]; }
function randomCode() {
  const n = crypto.getRandomValues(new Uint32Array(1))[0] % 90 + 10;
  return `${randomWord()}-${randomWord()}-${n}`;
}

const normalize = (code) => code.trim().toLowerCase().replace(/\s+/g, "");
const b64 = (buf) => Buffer.from(buf).toString("base64");

async function deriveKey(code, salt) {
  const material = await crypto.subtle.importKey("raw", new TextEncoder().encode(normalize(code)), "PBKDF2", false, ["deriveKey"]);
  return crypto.subtle.deriveKey(
    { name: "PBKDF2", salt, iterations: 310000, hash: "SHA-256" },
    material, { name: "AES-GCM", length: 256 }, false, ["encrypt", "decrypt"],
  );
}

const url = process.argv[2];
const code = process.argv[3] || randomCode();
if (!url || !/^https:\/\/app\.box\.com\/f\//.test(url)) {
  console.error('Usage: node tools/add-practice.mjs "https://app.box.com/f/..." [access-code]');
  process.exit(1);
}

const salt = crypto.getRandomValues(new Uint8Array(16));
const iv = crypto.getRandomValues(new Uint8Array(12));
const key = await deriveKey(code, salt);
const ct = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, new TextEncoder().encode(url));

// self-test: decrypt round-trip with a fresh derivation
const key2 = await deriveKey(code, salt);
const back = new TextDecoder().decode(await crypto.subtle.decrypt({ name: "AES-GCM", iv }, key2, ct));
if (back !== url) { console.error("SELF-TEST FAILED"); process.exit(1); }

console.log("ACCESS CODE (give this to the practice, keep it out of the repo):");
console.log("  " + code);
console.log("\nPaste this entry into the PRACTICES array in upload.html:");
console.log(JSON.stringify({ s: b64(salt), i: b64(iv), c: b64(new Uint8Array(ct)) }) + ",");
