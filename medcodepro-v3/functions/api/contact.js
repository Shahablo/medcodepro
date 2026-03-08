export async function onRequestPost(context) {
  try {
    const body = await context.request.json();
    const { name, email, role, organization, inquiry_type, message, source_page } = body || {};

    if (!name || !email || !message) {
      return json({ error: 'Please complete the required fields.' }, 400);
    }

    const RESEND_API_KEY = context.env.RESEND_API_KEY;
    const CONTACT_TO_EMAIL = context.env.CONTACT_TO_EMAIL;
    const CONTACT_FROM_EMAIL = context.env.CONTACT_FROM_EMAIL || 'MedCode Pro <noreply@medcodepro.ai>';

    if (!RESEND_API_KEY || !CONTACT_TO_EMAIL) {
      return json({ error: 'The demo request service is not configured.' }, 500);
    }

    const text = [
      `New MedCode Pro request`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Role: ${role || 'Not provided'}`,
      `Organization: ${organization || 'Not provided'}`,
      `Inquiry type: ${inquiry_type || 'Not provided'}`,
      `Source page: ${source_page || 'unknown'}`,
      '',
      message
    ].join('\n');

    const html = `
      <div style="font-family: Inter, Arial, sans-serif; line-height:1.6; color:#0f223f;">
        <h2>New MedCode Pro request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Role:</strong> ${escapeHtml(role || 'Not provided')}</p>
        <p><strong>Organization:</strong> ${escapeHtml(organization || 'Not provided')}</p>
        <p><strong>Inquiry type:</strong> ${escapeHtml(inquiry_type || 'Not provided')}</p>
        <p><strong>Source page:</strong> ${escapeHtml(source_page || 'unknown')}</p>
        <hr />
        <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
      </div>`;

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL,
        to: [CONTACT_TO_EMAIL],
        reply_to: email,
        subject: `MedCode Pro demo request from ${name}`,
        text,
        html
      })
    });

    if (!resendResponse.ok) {
      const errorPayload = await resendResponse.text();
      return json({ error: `Email delivery failed: ${errorPayload}` }, 500);
    }

    return json({ message: 'Thanks. Your demo request has been sent.' }, 200);
  } catch (error) {
    return json({ error: error.message || 'Unexpected server error.' }, 500);
  }
}

function json(payload, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { 'Content-Type': 'application/json' }
  });
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
