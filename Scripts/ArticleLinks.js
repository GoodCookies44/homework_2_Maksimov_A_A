document.addEventListener("DOMContentLoaded", () => {
  const articles = document.querySelectorAll(".article__container");

  articles.forEach((article) => {
    article.addEventListener("click", function (event) {
      const articleId = this.getAttribute("data-id");
      if (articleId) {
        window.location.href = `../Pages/ArticlesPages/article${articleId}.html`;
      }
    });
  });

  const tags = document.querySelectorAll(".tag__item");
  tags.forEach((tag) => {
    tag.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  });
});
