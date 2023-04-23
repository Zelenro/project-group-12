(() => {
    const refs = {
    openMenuBtn: document.querySelector("[data-menu-mob-open]"),
    closeMenuBtn: document.querySelector("[data-menu-mob-close]"),
    closeMenuLink: document.querySelector("[data-menu-mob-close-link]"),
    menu: document.querySelector("[data-menu-mob]"),
    };

    refs.closeMenuLink.addEventListener("click", toggleMenu);
    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);

    function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    }
})();
