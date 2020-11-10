const langList = document.querySelector(".switch-lang__list");
const langBtn = document.querySelector(".switch-lang__button");
const switchLang = document.querySelector(".switch-lang");

function onClickLangBtn() {
  switchLang.classList.toggle("switch-lang--open");
}

langBtn.addEventListener("click", onClickLangBtn);
