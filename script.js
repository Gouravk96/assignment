const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

const mobileMenu = () => {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
    document.querySelector(".a").toggle("hide");

}
menu.addEventListener("click", mobileMenu);