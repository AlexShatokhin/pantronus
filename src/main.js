import "./scss/main.scss";
import { initAccordion } from "./js/components/accordion.js";
import {toggleBurgerMenu} from "./js/components/burger.js";

document.addEventListener('DOMContentLoaded', () => {
    initAccordion();
    toggleBurgerMenu();
});