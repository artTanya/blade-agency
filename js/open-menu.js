const headerWrapper = document.querySelector(".main-header__wrapper");
const btn = document.querySelector(".main-header__btn");

function onClick() {
  headerWrapper.classList.toggle("main-header__wrapper--opened");
  btn.classList.toggle('main-header__btn--closed');
}

btn.addEventListener("click", onClick);
