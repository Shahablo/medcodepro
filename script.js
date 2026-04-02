(function () {
  const emailButtons = document.querySelectorAll('.email-cta');
  const recipient = ['shahabasiddique', 'gmail.com'].join('@');
  const subject = encodeURIComponent('MedCode Pro Demo Request');
  const body = encodeURIComponent(
    'Hi Shahab,\n\nI would like to learn more about MedCode Pro.\n\nPractice:\nSpecialty:\nBest callback number:\n\nThanks.'
  );

  emailButtons.forEach((button) => {
    button.addEventListener('click', function () {
      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    });
  });
})();
