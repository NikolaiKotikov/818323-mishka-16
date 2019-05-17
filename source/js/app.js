var navButtonState = document.querySelector(".header__menu-button");
var headerListSite = document.querySelector(".header__list--site");
var headerListUser = document.querySelector(".header__list--user");

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
})
