const contactForm = document.getElementById('audit-form');
const formStatus = document.getElementById('formStatus');
const submitButton = document.getElementById('submitButton');

function decodeEmail() {
  return atob('ZnJlZXNoYWhhYkBnbWFpbC5jb20=');
}

if (contactForm) {
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const payload = Object.fromEntries(formData.entries());

    if (!payload.name || !payload.email || !payload.organization || !payload.specialty) {
      formStatus.textContent = 'Please complete the required fields.';
      formStatus.className = 'form-status error';
      return;
    }

    if (payload.company) {
      formStatus.textContent = 'Submission blocked.';
      formStatus.className = 'form-status error';
      return;
    }

    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    formStatus.textContent = '';
    formStatus.className = 'form-status';

    try {
      const submission = new FormData();
      submission.append('_subject', 'New MedCode Pro audit request');
      submission.append('_captcha', 'false');
      submission.append('_template', 'table');
      submission.append('name', payload.name);
      submission.append('email', payload.email);
      submission.append('organization', payload.organization);
      submission.append('specialty', payload.specialty);
      submission.append('caseVolume', payload.caseVolume || '');
      submission.append('message', payload.message || '');
      submission.append('sourcePage', payload.sourcePage || '');
      submission.append('interest', payload.interest || '');

      const response = await fetch(`https://formsubmit.co/ajax/${decodeEmail()}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        body: submission
      });

      const result = await response.json();

      if (!response.ok || result.success === 'false') {
        throw new Error('Unable to send your request right now.');
      }

      formStatus.textContent = 'Thanks. Your audit request has been sent.';
      formStatus.className = 'form-status success';
      contactForm.reset();
    } catch (error) {
      formStatus.textContent = error.message || 'Unable to send your request right now.';
      formStatus.className = 'form-status error';
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = 'Schedule my audit';
    }
  });
}
