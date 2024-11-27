// Toggle the menu in mobile view
document.querySelector('.navbar__toggle').addEventListener('click', () => {
    const menu = document.querySelector('.navbar__menu');
    menu.classList.toggle('active');
});