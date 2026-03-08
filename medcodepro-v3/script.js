(function () {
  const navToggle = document.querySelector('[data-nav-toggle]');
  const navLinks = document.querySelector('[data-nav-links]');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  }

  document.querySelectorAll('.faq-item').forEach((item) => {
    const button = item.querySelector('.faq-question');
    if (!button) return;
    button.addEventListener('click', () => {
      item.classList.toggle('open');
    });
  });

  const form = document.querySelector('[data-demo-form]');
  const status = document.querySelector('[data-form-status]');
  if (form && status) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      status.textContent = 'Sending...';
      status.className = 'form-status';

      const payload = Object.fromEntries(new FormData(form).entries());

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        const data = await response.json().catch(() => ({}));

        if (!response.ok) {
          throw new Error(data.error || 'We could not send your request.');
        }

        status.textContent = data.message || 'Thanks. Your demo request has been sent.';
        status.className = 'form-status success';
        form.reset();
      } catch (error) {
        status.textContent = error.message || 'Something went wrong. Please try again.';
        status.className = 'form-status error';
      }
    });
  }
})();
