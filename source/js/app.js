var navButtonState = document.querySelector(".header__menu-button");
var headerListSite = document.querySelector(".header__list--site");
var headerListUser = document.querySelector(".header__list--user");
var showPopup = document.querySelectorAll(".js-popup-show");
var popup = document.querySelector(".popup");
var bg = document.querySelector(".page__background");

headerListSite.classList.add("header__list--hidden");
headerListUser.classList.add("header__list--hidden");
navButtonState.classList.remove('menu-button--nojs');
navButtonState.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (navButtonState.classList.contains("menu-button--close")) {
    navButtonState.classList.remove("menu-button--close");
    navButtonState.classList.add("menu-button--open");
    headerListSite.classList.add("header__list--hidden");
    headerListUser.classList.add("header__list--hidden");
  } else {
    navButtonState.classList.add("menu-button--close");
    navButtonState.classList.remove("menu-button--open");
    headerListSite.classList.remove("header__list--hidden");
    headerListUser.classList.remove("header__list--hidden");
  }
});

for (var i=0; i <= showPopup.length -1; i++) {
  showPopup[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("visually-hidden");
    bg.classList.remove("page__background--hidden");
  });
}

bg.addEventListener("click", function(evt) {
  popup.classList.add("visually-hidden");
  bg.classList.add("page__background--hidden");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    popup.classList.add("visually-hidden");
    bg.classList.add("page__background--hidden");
  }
});
