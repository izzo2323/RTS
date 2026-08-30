// Smooth scrolling for in-page anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 66,
                behavior: 'smooth'
            });

            document.querySelectorAll('nav ul li a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

// Header background on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.97)';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        header.style.background = '#fff';
        header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
});

// Mobile menu toggle
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

// Dropdown behavior — tap to expand on mobile, hover on desktop
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        const dropdown = item.querySelector('.dropdown');
        const link = item.querySelector('a');

        if (dropdown && link) {
            link.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');

                    navItems.forEach(otherItem => {
                        if (otherItem !== item && otherItem.querySelector('.dropdown')) {
                            otherItem.querySelector('.dropdown').classList.remove('active');
                        }
                    });
                }
            });
        }
    });

    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-menu')) {
            document.querySelectorAll('.dropdown.active').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
});

// Fade-in animation for cards as they enter the viewport
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

document.querySelectorAll('.pricing-card, .review-card, .feature-card').forEach(card => {
    observer.observe(card);
});

// Mock map placeholder (would be a real Google Maps embed in production)
document.addEventListener('DOMContentLoaded', function() {
    const mapPlaceholder = document.querySelector('.map-placeholder');
    if (mapPlaceholder) {
        mapPlaceholder.innerHTML = `
            <p>Interactive Map Placeholder</p>
            <p>8809 Maple St, Omaha, NE 68137</p>
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
