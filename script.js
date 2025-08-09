// Smooth scrolling function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'hsla(224, 15%, 9%, 0.95)';
    } else {
        navbar.style.background = 'hsla(224, 15%, 9%, 0.8)';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.pet-card, .vouch-card, .contact-card, .why-choose');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Button click effects
document.addEventListener('click', (e) => {
    if (e.target.matches('.btn')) {
        e.target.style.transform = 'scale(0.95)';
        setTimeout(() => {
            e.target.style.transform = '';
        }, 150);
    }
});

// Floating animation delay for pet images
document.addEventListener('DOMContentLoaded', () => {
    const petImages = document.querySelectorAll('.pet-image.floating');
    petImages.forEach((img, index) => {
        img.style.animationDelay = `${index * 0.5}s`;
    });
});

// Copy Discord username to clipboard
function copyDiscord() {
    navigator.clipboard.writeText('303bx').then(() => {
        // Show a temporary notification
        const notification = document.createElement('div');
        notification.textContent = 'Discord copié!';
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: hsl(220, 38%, 57%);
            color: white;
            padding: 1rem;
            border-radius: 0.5rem;
            z-index: 9999;
            font-weight: 600;
        `;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 2000);
    });
}

// Add click event to Discord button
document.addEventListener('DOMContentLoaded', () => {
    const discordBtn = document.querySelector('.btn-discord');
    if (discordBtn) {
        discordBtn.addEventListener('click', copyDiscord);
    }
});

// Parallax effect for background blobs
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    const blob1 = document.querySelector('.blob-1');
    const blob2 = document.querySelector('.blob-2');
    
    if (blob1) {
        blob1.style.transform = `translateY(${rate}px)`;
    }
    if (blob2) {
        blob2.style.transform = `translateY(${rate * 0.8}px)`;
    }
});

// Add mobile styles for navigation
const mobileStyles = `
@media (max-width: 768px) {
    .nav-menu {
        position: fixed;
        top: 70px;
        left: -100%;
        width: 100%;
        height: calc(100vh - 70px);
        background: hsl(var(--background));
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: left 0.3s ease;
        z-index: 999;
    }
    
    .nav-menu.active {
        left: 0;
    }
    
    .nav-toggle.active span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .nav-toggle.active span:nth-child(2) {
        opacity: 0;
    }
    
    .nav-toggle.active span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
}
`;

// Inject mobile styles
const styleSheet = document.createElement('style');
styleSheet.textContent = mobileStyles;
document.head.appendChild(styleSheet);