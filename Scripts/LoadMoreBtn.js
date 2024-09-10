document.addEventListener("DOMContentLoaded", () => {
  const articles = document.querySelectorAll(".article__container");
  const loadMoreButton = document.getElementById("load_more");
  const articlesPerPage = 8;
  let currentlyVisible = 8;

  articles.forEach((article, index) => {
    if (index >= currentlyVisible) {
      article.style.display = "none";
    }
  });

  function loadMoreArticles() {
    const totalArticles = articles.length;

    for (
      let i = currentlyVisible;
      i < currentlyVisible + articlesPerPage && i < totalArticles;
      i++
    ) {
      articles[i].style.display = "block";
    }

    currentlyVisible += articlesPerPage;

    if (currentlyVisible >= totalArticles) {
      loadMoreButton.style.display = "none";
    }
  }

  loadMoreButton.addEventListener("click", loadMoreArticles);
});
