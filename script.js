const inputField = document.querySelector("input");
const searchBox = document.querySelector(".search");

inputField.addEventListener("focus", () => {
  searchBox.setAttribute("style", "border: 1px solid #919191;");
});

inputField.addEventListener("blur", () => {
  searchBox.setAttribute("style", "border: 1px solid transparent;");
});
