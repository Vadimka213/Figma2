const menuButton = document.querySelector(".header-menu");
const navigation = document.querySelector(".header-navigation");
const body = document.body;

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("is-open");
    body.classList.toggle("menu-open");
});