window.addEventListener('scroll', () => {
  const header = document.querySelector('.site-header');
  if (window.scrollY > 8) header.classList.add('is-scrolled');
  else header.classList.remove('is-scrolled');
});
