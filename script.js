window.addEventListener('scroll', () => {
  const header = document.querySelector('.site-header');
  if (!header) return;
  if (window.scrollY > 8) header.classList.add('is-scrolled');
  else header.classList.remove('is-scrolled');
});
function loadVideo(el) {
  el.innerHTML = `
    <iframe
      src="https://www.youtube.com/embed/90rdcI61eIo?autoplay=1&controls=1&rel=0&modestbranding=1&playsinline=1"
      title="MedCode Pro platform video"
      allow="autoplay; encrypted-media; picture-in-picture"
      allowfullscreen>
    </iframe>
  `;
}
