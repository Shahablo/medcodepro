export async function onRequestPost(context) {
  try {
    const { request, env } = context;

    const body = await request.json();
    const name = String(body.name || '').trim();
    const email = String(body.email || '').trim();
    const role = String(body.role || '').trim();
    const organization = String(body.organization || '').trim();
    const inquiryType = String(body.inquiryType || 'General question').trim();
    const sourcePage = String(body.sourcePage || 'unknown').trim();
    const message = String(body.message || '').trim();
    const honeypot = String(body.company || '').trim();

    if (honeypot) {
      return json({ ok: true }, 200);
    }

    if (!name || !email || !message) {
      return json({ error: 'Missing required fields.' }, 400);
    }

    const resendApiKey = env.RESEND_API_KEY;
    const toEmail = env.CONTACT_TO_EMAIL;
    const fromEmail = env.CONTACT_FROM_EMAIL || 'MedCode Pro <onboarding@resend.dev>';

    if (!resendApiKey || !toEmail) {
      return json({ error: 'Form is not configured yet.' }, 500);
    }

    const subject = `[MedCode Pro] ${inquiryType} from ${name}`;
    const html = `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#10203a;max-width:720px;">
        <h2>New MedCode Pro website inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Role:</strong> ${escapeHtml(role || 'Not provided')}</p>
        <p><strong>Organization:</strong> ${escapeHtml(organization || 'Not provided')}</p>
        <p><strong>Inquiry type:</strong> ${escapeHtml(inquiryType)}</p>
        <p><strong>Source page:</strong> ${escapeHtml(sourcePage)}</p>
        <p><strong>Message:</strong></p>
        <div style="padding:12px 14px;background:#f5f8fc;border-radius:12px;border:1px solid #dbe5f1;white-space:pre-wrap;">${escapeHtml(message)}</div>
      </div>
    `;

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${resendApiKey}`
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject,
        html
      })
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      return json({ error: `Email delivery failed: ${errorText}` }, 502);
    }

    return json({ ok: true }, 200);
  } catch (error) {
    return json({ error: error.message || 'Server error.' }, 500);
  }
}

function json(payload, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
