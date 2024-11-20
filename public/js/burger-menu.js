export const initBurgerMenu = () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if(menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            menuToggle.classList.toggle('open');
            navMenu.setAttribute('aria-hidden', navMenu.classList.contains('open') ? 'false' : 'true');
        });
    }
};