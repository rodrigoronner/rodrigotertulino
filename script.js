document.addEventListener('DOMContentLoaded', function () {
  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const navH = document.querySelector('header').offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - navH - 12;
      window.scrollTo({ top, behavior: 'smooth' });
      // fecha menu mobile se aberto
      document.getElementById('main-nav').classList.remove('open');
    });
  });

  // Menu mobile toggle
  document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('main-nav').classList.toggle('open');
  });

  document.getElementById('menu-close').addEventListener('click', function () {
    document.getElementById('main-nav').classList.remove('open');
  });

  // Fechar menu ao clicar fora
  document.addEventListener('click', function (e) {
    const nav = document.getElementById('main-nav');
    if (nav.classList.contains('open') && !nav.contains(e.target) && e.target.id !== 'menu-toggle') {
      nav.classList.remove('open');
    }
  });

  // Highlight nav link ativo
  const sections = document.querySelectorAll('main section[id], section.hero');
  const navLinks = document.querySelectorAll('#main-nav a');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`#main-nav a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => observer.observe(s));
});
