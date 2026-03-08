const menuToggle = document.getElementById('menuToggle');
const siteNav = document.getElementById('siteNav');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
const submitButton = document.getElementById('submitButton');

if (contactForm) {
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const payload = Object.fromEntries(formData.entries());

    if (!payload.name || !payload.email || !payload.message) {
      formStatus.textContent = 'Please complete the required fields.';
      formStatus.className = 'form-status error';
      return;
    }

    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    formStatus.textContent = '';
    formStatus.className = 'form-status';

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong.');
      }

      formStatus.textContent = 'Thanks. Your message has been sent.';
      formStatus.className = 'form-status success';
      contactForm.reset();
    } catch (error) {
      formStatus.textContent = error.message || 'Unable to send your message right now.';
      formStatus.className = 'form-status error';
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = 'Send message';
    }
  });
}
