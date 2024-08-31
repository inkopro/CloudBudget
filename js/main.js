const menu = document.querySelector('.header__menu')
const menuBtn = document.querySelector('.header__burger__btn')
const menuOverlay = document.querySelector('.overlay')
const body = document.body;

if (menu && menuBtn) {
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
    menuBtn.classList.toggle('active')
    body.classList.toggle('lock')
  })
}