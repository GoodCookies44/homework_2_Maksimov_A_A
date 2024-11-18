document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".tab__aricle_topic_list .topic_item");

  items.forEach((item, index) => {
    if (index < items.length - 1) {
      item.style.position = "relative";
      const nextItem = items[index + 1];

      // Добавляем разделитель если следующий элемент на той же строке
      const nextOffsetTop = nextItem.offsetTop;
      if (item.offsetTop === nextOffsetTop) {
        const dot = document.createElement("span");
        dot.textContent = "•";
        dot.style.margin = " 0 2rem";
        dot.style.fontSize = "3.5rem";
        item.appendChild(dot);
      }
    }
  });
});
