// Mobile Menu Toggle (for both index.html and interface.html)
document.addEventListener('DOMContentLoaded', function() {
    // index.html mobile menu
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeBtn = document.getElementById('closeBtn');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
        });
    }
    if (closeBtn && mobileMenu) {
        closeBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    }

    // interface.html mobile menu
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.innerHTML = navLinks.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
    }

    // Close mobile menus on link click
    const allMobileLinks = document.querySelectorAll('.mobile-menu a, .nav-links a');
    allMobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu) mobileMenu.classList.remove('active');
            if (navLinks) navLinks.classList.remove('active');
        });
    });
});
// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all items
        faqItems.forEach(faqItem => {
            faqItem.classList.remove('active');
        });
        
        // If it wasn't active before, make it active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// Testimonial Slider
const testimonialCards = document.querySelectorAll('.testimonial-card');
const slider = document.querySelector('.testimonials-slider');
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonialCards.forEach((card, i) => {
        card.style.display = i === index ? 'block' : 'none';
    });
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
    showTestimonial(currentTestimonial);
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length;
    showTestimonial(currentTestimonial);
}

// Add controls if not present
if (slider && testimonialCards.length > 1) {
    let controls = document.createElement('div');
    controls.className = 'testimonial-controls';
    controls.innerHTML = `
        <button class="control-btn" id="prevTestimonial"><i class="fas fa-chevron-left"></i></button>
        <button class="control-btn" id="nextTestimonial"><i class="fas fa-chevron-right"></i></button>
    `;
    slider.appendChild(controls);
    document.getElementById('prevTestimonial').onclick = prevTestimonial;
    document.getElementById('nextTestimonial').onclick = nextTestimonial;
}
if (testimonialCards.length > 0) {
    showTestimonial(0);
    setInterval(nextTestimonial, 5000);
}

// Close mobile menu on link click
const mobileMenuLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// Particles Animation
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random size between 3px and 8px
        const size = Math.random() * 5 + 3;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        
        // Random animation duration and delay
        const duration = Math.random() * 10 + 5;
        const delay = Math.random() * 5;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        
        particlesContainer.appendChild(particle);
    }
}

createParticles();
