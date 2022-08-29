(() => {
  const refs = {
    openMenuBtn: document.querySelector(".header__menu-open"),
    closeMenuBtn: document.querySelector(".mob-menu__close"),
    menu: document.querySelector(".mob-menu"),
    body: document.querySelector("body"),
    menuList: document.querySelector(".mob-menu__nav-list"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);
  refs.menuList.addEventListener("click", removeMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
  }
  function removeMenu() {
    refs.menu.classList.add("is-hidden");
  }
})();