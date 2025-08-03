import "./scss/main.scss";
import { initAccordion } from "./js/components/accordion.js";
import {toggleBurgerMenu} from "./js/components/burger.js";

document.addEventListener('DOMContentLoaded', () => {
    const appHeight = () => {
        const doc = document.documentElement
        doc.style.setProperty('--app-height', `${window.innerHeight}px`)
    }
    window.addEventListener('resize', appHeight)
    appHeight()
    
    initAccordion();
    toggleBurgerMenu();
});