document.addEventListener("DOMContentLoaded", function () {
  const breadcrumb = document.querySelector(".breadcrumb");
  const path = window.location.pathname.split("/").filter((p) => p && p !== "Pages");
  const pageTitle = document.querySelector("h1").textContent;

  const breadcrumbHTML = path
    .map((segment, index) => {
      const readableName = index === path.length - 1 ? pageTitle : segment.replace(".html", "");
      const href = index === 0 ? "index.html" : segment;
      return `<li class="breadcrumb__item ${index === path.length - 1 ? "active" : ""}">
              ${index === path.length - 1 ? readableName : `<a href="${href}">${readableName}</a>`}
            </li>`;
    })
    .join("");

  breadcrumb.innerHTML =
    `<li class="breadcrumb__item"><a class="link" href="index.html">Главная</a></li>` +
    breadcrumbHTML;
});
