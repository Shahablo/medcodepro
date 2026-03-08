const mobileToggle = document.querySelector('.mobile-toggle');
const siteNav = document.querySelector('.site-nav');

if (mobileToggle && siteNav) {
  mobileToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    mobileToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const demoForm = document.getElementById('demoForm');
const formStatus = document.getElementById('formStatus');

if (demoForm) {
  demoForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (formStatus) {
      formStatus.textContent = 'Sending...';
    }

    const formData = new FormData(demoForm);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong.');
      }

      demoForm.reset();
      if (formStatus) {
        formStatus.textContent = 'Thanks. Your demo request was sent successfully.';
      }
    } catch (error) {
      if (formStatus) {
        formStatus.textContent = error.message || 'Unable to send right now. Please try again.';
      }
    }
  });
}
