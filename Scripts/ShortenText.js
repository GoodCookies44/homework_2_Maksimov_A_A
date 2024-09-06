document.addEventListener("DOMContentLoaded", () => {
  const paragraphs = document.querySelectorAll(".article__paragraph");
  const maxLength = 100;

  paragraphs.forEach((paragraph) => {
    let originalText = paragraph.textContent;

    if (originalText.length > maxLength) {
      let truncatedText = originalText.substring(0, maxLength);
      truncatedText = truncatedText.split(" ").slice(0, -1).join(" ");

      const punctuationRegex = /[.,;!?]$/;
      if (punctuationRegex.test(truncatedText)) {
        truncatedText = truncatedText.slice(0, -1);
      }

      paragraph.textContent = truncatedText + "...";
    }
  });
});
