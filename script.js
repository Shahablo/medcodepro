document.querySelectorAll('.email-cta').forEach((button) => {
  button.addEventListener('click', () => {
    const subject = encodeURIComponent('MedCode Pro audit request');
    const body = encodeURIComponent(
      'Hi Shahab,\n\nI would like to learn more about a MedCode Pro audit and how the platform supports ongoing workflow improvements.\n\nPractice / specialty:\nBest contact info:\nAnything else we should know:\n'
    );
    window.location.href = `mailto:shahabasiddique@gmail.com?subject=${subject}&body=${body}`;
  });
});
