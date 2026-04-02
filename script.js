(function () {
  const emailButtons = document.querySelectorAll('.email-cta');
  const recipient = ['shahabasiddique', 'gmail.com'].join('@');
  const subject = encodeURIComponent('MedCode Pro Demo Request');
  const body = encodeURIComponent(
    'Hi Shahab,%0D%0A%0D%0AI would like to learn more about MedCode Pro.%0D%0A%0D%0APractice:%0D%0ASpecialty:%0D%0ABest callback number:%0D%0A%0D%0AThanks.'
  );

  emailButtons.forEach((button) => {
    button.addEventListener('click', function () {
      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    });
  });
})();
