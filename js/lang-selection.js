const langList = document.querySelector(".switch-lang__list");
const langBtn = document.querySelector(".switch-lang__button");
const switchLang = document.querySelector(".switch-lang");
const inputs = switchLang.querySelectorAll("input");

let addListener = function (element) {
  element.addEventListener("change", function () {
    langBtn.innerHTML = element.value;
    switchLang.classList.remove("switch-lang--open");
  });
};

function onClickLangBtn() {
  switchLang.classList.toggle("switch-lang--open");
  for (let i = 0; i < inputs.length; i++) {
    addListener(inputs[i]);
  }
}

langBtn.addEventListener("click", onClickLangBtn);
