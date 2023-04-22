(() => {
    const refs = {
    openMenuBtn: document.querySelector("[data-menu-mob-open]"),
    closeMenuBtn: document.querySelector("[data-menu-mob-close]"),
    menu: document.querySelector("[data-menu-mob]"),
    };

    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);

    function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    }
})();