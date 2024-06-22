

document.getElementById('currentyear').textContent = new Date().getFullYear();

document.getElementById('lastModified').textContent = "last Modification: " + document.lastModified

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('open');
        toggleMenuButtons(); // Toggle menu buttons based on nav state
    });

    function toggleMenuButtons() {
        menuToggle.classList.toggle('open');
    }
});

