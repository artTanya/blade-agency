const buyBtn = document.querySelector(".tickets__button");
const popup = document.querySelector(".popup");
const closeBtn = document.querySelector(".popup__btn-close");
const closeBtnThanks = document.querySelector(".feedback-thanks__btn-close");
const overlay = document.querySelector(".overlay");
const thanksPopup = document.querySelector(".contacts__feedback-thanks");
const btnSubmit = document.querySelector(".user-form__button");


function onClickBuyBtn() {
  popup.classList.add("popup--open");
  overlay.classList.add("overlay--open");
}

function onClickBtnSubmit() {
  thanksPopup.classList.add("contacts__feedback-thanks--open");
  overlay.classList.add("overlay--open");
}

function onClickCloseBtn() {
  popup.classList.remove("popup--open");
  overlay.classList.remove("overlay--open");
}

function onClickCloseBtnThanks() {
  thanksPopup.classList.remove("contacts__feedback-thanks--open");
  overlay.classList.remove("overlay--open");
}

buyBtn.addEventListener("click", onClickBuyBtn);
closeBtn.addEventListener("click", onClickCloseBtn);
btnSubmit.addEventListener("click", onClickBtnSubmit);
closeBtnThanks.addEventListener("click", onClickCloseBtnThanks);



