document.addEventListener("DOMContentLoaded", () => {
  const paragraphs = document.querySelectorAll(".article__paragraph");

  paragraphs.forEach((paragraph) => {
    const originalText = paragraph.textContent;
    paragraph.textContent = originalText;

    const lineHeight = parseFloat(getComputedStyle(paragraph).lineHeight);
    const maxHeight = lineHeight * 2;

    if (paragraph.scrollHeight > maxHeight) {
      let truncatedText = originalText;
      const words = truncatedText.split(" ");

      while (paragraph.scrollHeight > maxHeight && words.length > 0) {
        words.pop();
        truncatedText = words.join(" ") + "...";
        paragraph.textContent = truncatedText;
      }

      const punctuationRegex = /[.,;!?]$/;
      if (punctuationRegex.test(paragraph.textContent.slice(0, -3))) {
        paragraph.textContent = paragraph.textContent.slice(0, -4) + "...";
      }
    }
  });
});
