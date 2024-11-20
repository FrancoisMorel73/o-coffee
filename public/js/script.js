import { initBurgerMenu } from "./burger-menu.js";
import { displayRandomCoffeeQuote } from "./quote.js";
import { submitFilterForm } from "./filter.js";

document.addEventListener('DOMContentLoaded', () => {
    initBurgerMenu();
    displayRandomCoffeeQuote();
    submitFilterForm();
});