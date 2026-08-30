// Mobile menu toggle functionality
const mobileMenu = document.querySelector('#mobile-menu');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenu && navMenu) {
    mobileMenu.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 80) {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.15)';
    } else {
        header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
});

// Smooth scrolling for in-page anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            window.scrollTo({
                top: target.offsetTop - 66,
                behavior: 'smooth'
            });
        }
    });
});

// Simple reveal animation for cards as they enter the viewport
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .service-card, .shop-card, .review-card').forEach(card => {
    observer.observe(card);
});

// Mock map placeholder (would be a real embed in production)
document.addEventListener('DOMContentLoaded', function() {
    const mapPlaceholder = document.querySelector('.map-placeholder');
    if (mapPlaceholder) {
        mapPlaceholder.innerHTML = `
            <p>Interactive Map Placeholder</p>
            <p>37th St, Des Moines, IA</p>
        `;
    }
});


(function () {
  var overlay = document.getElementById('demoAlert');
  if (!overlay) return;
  var closeBtn = document.getElementById('demoAlertClose');
  function dismiss() { overlay.hidden = true; }
  closeBtn.addEventListener('click', dismiss);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !overlay.hidden) dismiss();
  });
})();
