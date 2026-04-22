// 1. Navbar Effect: Change background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 2. Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Offset for the fixed navbar
                behavior: 'smooth'
            });
        }
    });
});

// 3. Simple Scroll Reveal Animation
// This adds a "fade-in" effect to service cards when they appear on screen
const revealOnScroll = () => {
    const cards = document.querySelectorAll('.service-card');
    const windowHeight = window.innerHeight;
    
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < windowHeight - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
};

// Initial Setup for Animation
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "all 0.6s ease-out";
    });
    
    // Run once on load and then on every scroll
    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);
});

// 4. Contact Form / Button Alert (Optional)
// Just a small interaction for the "Start Now" button if needed
const mainBtn = document.querySelector('.contact-box .btn');
mainBtn.addEventListener('mouseenter', () => {
    console.log("AltusAds: Potential client interested!");
});