// Создайте веб-форму с текстовым полем. Реализуйте функционал, при котором при попытке закрыть вкладку браузера появляется диалоговое окно с предупреждением о возможности потери введенных, но несохраненных данных.

let text = false;
let button = false;
const FormEl = document.querySelector(".form");
const inputTextEl = document.querySelector("#inputText");
const buttonEl = document.querySelector(".button");

buttonEl.addEventListener("click", () => {
  button = true;
});

inputTextEl.addEventListener("input", () => {
  text = true;
});

FormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  e.target.reset();
});

window.addEventListener("beforeunload", (e) => {
  if (text === true && button === false) {
    e.preventDefault();
  }
});
