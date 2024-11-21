import { initBurgerMenu } from "./burger-menu.js";
import { displayRandomCoffeeQuote } from "./quote.js";
import { submitFilterForm } from "./filter.js";
import { loadMore } from "./load-more.js";

document.addEventListener('DOMContentLoaded', () => {
    initBurgerMenu();
    displayRandomCoffeeQuote();
    submitFilterForm();
    loadMore();
});