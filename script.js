document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuIcon = document.getElementById('menu-icon');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link, .btn-book');

    menuIcon.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Toggle icon between bars and times (close)
        const icon = menuIcon.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = menuIcon.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(0, 0, 0, 0.9)';
            navbar.style.boxShadow = '0 2px 15px rgba(0,0,0,0.5)';
        } else {
            navbar.style.background = 'transparent';
            navbar.style.boxShadow = 'none';
        }
    });
});
