document.addEventListener("DOMContentLoaded", function () {
  const breadcrumb = document.querySelector(".breadcrumb");
  const path = window.location.pathname.split("/").filter((p) => p && p !== "Pages");
  const pageTitle = document.querySelector("h1").textContent;

  const breadcrumbHTML = path
    .map((segment, index) => {
      let readableName;
      let href;

      if (segment === "ArticlesPages") {
        readableName = "Блог";
        href = "/Pages/Blog.html";
      } else {
        readableName = segment.replace(".html", "");
        href = index === 0 ? "/Pages/index.html" : segment;
      }
      if (index === path.length - 1) {
        return `<li class="breadcrumb__item active">${pageTitle}</li>`;
      }

      return `<li class="breadcrumb__item"><a class="link" href="${href}">${readableName}</a></li>`;
    })
    .join("");

  breadcrumb.innerHTML =
    `<li class="breadcrumb__item"><a class="link" href="/Pages/index.html">Главная</a></li>` +
    breadcrumbHTML;
});
