let lastScrollTop = 0;
const header = document.querySelector("header");
const burgerMenuScroll = document.querySelector(".burger__menu");
const mainElementScroll = document.querySelector("main");

window.addEventListener("scroll", function () {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop && currentScroll > window.innerHeight) {
    header.style.top = "-19rem";
    burgerMenuScroll.classList.remove("active");
    mainElementScroll.classList.remove("active");
  } else {
    header.style.top = "0";
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
