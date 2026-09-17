const menuButton = document.querySelector(".header-menu");
const navigation = document.querySelector(".header-navigation");
const body = document.body;

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("is-open");
    body.classList.toggle("menu-open");
});


// =========================
// MODAL WINDOW
// =========================

const modal = document.querySelector("[data-modal]");
const openModalButton = document.querySelector(".hero-button");
const closeModalButton = document.querySelector("[data-modal-close]");


// Відкрити модальне вікно
openModalButton.addEventListener("click", () => {
    modal.classList.remove("is-hidden");
    body.classList.add("modal-open");
});


// Закрити через кнопку X
closeModalButton.addEventListener("click", () => {
    modal.classList.add("is-hidden");
    body.classList.remove("modal-open");
});


// Закрити при кліку на затемнений фон
modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.classList.add("is-hidden");
        body.classList.remove("modal-open");
    }
});


// Закрити клавішею Escape
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        modal.classList.add("is-hidden");
        body.classList.remove("modal-open");
    }
});
