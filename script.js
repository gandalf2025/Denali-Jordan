document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const navMenu = document.getElementById('nav-menu');

    menuBtn.addEventListener('click', function() {
        navMenu.classList.add('open');
    });

    closeBtn.addEventListener('click', function() {
        navMenu.classList.remove('open');
    });
});