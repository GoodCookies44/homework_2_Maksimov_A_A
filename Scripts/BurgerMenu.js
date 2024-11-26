// Получаем элементы для управления бургер-меню
const burgerIcon = document.querySelector(".header__burger_container");
const burgerMenu = document.querySelector(".header__nav");
const mainElement = document.querySelector("main");

burgerIcon.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  mainElement.classList.toggle("active");
});
