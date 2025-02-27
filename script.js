// Modo Noturno
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Verifica o tema salvo
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    updateThemeIcon();
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark-mode' : '');
    updateThemeIcon();
});

function updateThemeIcon() {
    const icon = themeToggle.querySelector('i');
    icon.classList.toggle('fa-moon', !body.classList.contains('dark-mode'));
    icon.classList.toggle('fa-sun', body.classList.contains('dark-mode'));
}

// Carrossel



document.addEventListener('DOMContentLoaded', () => {
    const carouselSlide = document.querySelector('.carousel-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let counter = 0;
    
    function updateCarousel() {
        const itemWidth = document.querySelector('.carousel-item').offsetWidth;
        carouselSlide.style.transform = `translateX(${-itemWidth * counter}px)`;
    }

    nextBtn.addEventListener('click', () => {
        if (counter >= carouselSlide.children.length - 1) return;
        counter++;
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        if (counter <= 0) return;
        counter--;
        updateCarousel();
    });

    window.addEventListener('resize', updateCarousel);
});


