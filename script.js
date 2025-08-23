document.addEventListener('DOMContentLoaded', function() {

    // Typed.js for the hero section tagline
    if (document.getElementById('typed-text')) {
        var options = {
            strings: ["intelligent robots.", "efficient algorithms.", "the future."],
            typeSpeed: 50,
            backSpeed: 25,
            backDelay: 2000,
            loop: true
        };
        var typed = new Typed('#typed-text', options);
    }

    // Scroll reveal animation for sections
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.15
    });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // Hide header on scroll down, show on scroll up
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // Scroll Down
            header.style.top = '-80px';
        } else {
            // Scroll Up
            header.style.top = '0';
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, false);
});
