let lastScrollTop = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", function () {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop && currentScroll > window.innerHeight) {
    header.style.top = "-19rem";
  } else {
    header.style.top = "0";
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
