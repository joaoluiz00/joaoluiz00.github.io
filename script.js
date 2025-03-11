document.addEventListener('DOMContentLoaded', () => {
  const menuMobile = document.querySelector('.menu-mobile');
  const navLinks = document.querySelector('.nav-links');
  menuMobile.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });

  const carouselSlide = document.querySelector('.carousel-slide');
  const carouselItems = document.querySelectorAll('.carousel-item');
  let currentIndex = 0;
  const nextBtn = document.querySelector('.next-btn');
  const prevBtn = document.querySelector('.prev-btn');

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    updateCarousel();
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    updateCarousel();
  });

  function updateCarousel() {
    carouselSlide.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    updateThemeIcon();
  });

  const faders = document.querySelectorAll('.fade-in');
  const appearOptions = {
    threshold: 0.3,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});

function updateThemeIcon() {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  const icon = themeToggle.querySelector('i');
  if (body.classList.contains('dark-mode')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
    themeToggle.setAttribute('aria-pressed', 'true');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
    themeToggle.setAttribute('aria-pressed', 'false');
  }
}
