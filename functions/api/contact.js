export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    const body = await request.json();

    const { name, email, company, specialty, message } = body;

    if (!name || !email || !company) {
      return Response.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    if (!env.RESEND_API_KEY || !env.CONTACT_TO_EMAIL) {
      return Response.json(
        { error: 'Form is not configured yet. Add Cloudflare environment variables.' },
        { status: 500 }
      );
    }

    const fromEmail = env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [env.CONTACT_TO_EMAIL],
        subject: `New MedCode Pro demo request from ${name}`,
        reply_to: email,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Company: ${company}`,
          `Specialty: ${specialty || 'Not provided'}`,
          `Message: ${message || 'No message provided'}`
        ].join('\n')
      })
    });

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      return Response.json({ error: `Email send failed: ${errorText}` }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message || 'Unexpected server error.' }, { status: 500 });
  }
}
