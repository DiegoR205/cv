document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        navList.classList.toggle('active');
    });

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); 
            navList.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            const targetId = link.getAttribute('href'); 
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const topPosition = targetSection.offsetTop - headerHeight;
                window.scrollTo({
                    top: topPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});