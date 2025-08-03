export function toggleBurgerMenu() {
    const burgerMenu = document.querySelector('.burger-menu');
    const burgerButton = document.querySelector('.burger');
    const burgerLinks = document.querySelectorAll('.burger-menu__link');
    
    burgerButton?.addEventListener("click", () => {
        burgerMenu.classList.toggle('burger-active');
        burgerButton.classList.toggle('burger-button-active');
        document.body.classList.toggle('no-scroll');
    })

    burgerLinks?.forEach(link => {
        link.addEventListener("click", () => {
            burgerMenu.classList.remove('burger-active');
            burgerButton.classList.remove('burger-button-active');
            document.body.classList.remove('no-scroll');
        });
    });
}