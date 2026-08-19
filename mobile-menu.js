const menuButton = document.querySelector('.header-menu');
const header = document.querySelector('.header');
const menuIcon = document.querySelector('.header-mobile');

menuButton.addEventListener('click', () => {
    const isOpen = header.classList.toggle('is-open');

    document.body.classList.toggle('no-scroll', isOpen);

    if (isOpen) {
        menuIcon.src = './images/menu.png';
        menuIcon.alt = 'Закрити меню';
    } else {
        menuIcon.src = './images/close.png';
        menuIcon.alt = 'Відкрити меню';
    }
});