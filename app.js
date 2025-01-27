const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Add smooth scrolling effect to navigation links

const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const target = document.querySelector(link.getAttribute('href'));

        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Add sticky navigation bar

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

// Add fade-in animation to hero section

const heroSection = document.querySelector('.hero-section');

window.addEventListener('load', () => {
    heroSection.classList.add('fade-in');
});

// Add smooth scrolling effect to hero section

heroSection.addEventListener('click', (e) => {
    if (e.target.classList.contains('scroll-btn')) {
        const target = document.querySelector('.services');

        target.scrollIntoView({ behavior: 'smooth' });
    }
});