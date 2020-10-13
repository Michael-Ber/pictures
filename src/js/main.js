import carousel from "./modules/carousel";
import modals from "./modules/modals";
import form from "./modules/form";

window.addEventListener('DOMContentLoaded', () => {
    carousel('.main-slider', '.main-slider-item');
    modals();
    form('form');
});