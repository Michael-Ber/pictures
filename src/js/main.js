import carousel from "./modules/carousel";
import modals from "./modules/modals";
import form from "./modules/form";

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    carousel('.feedback-slider-item','horizontal' ,'.main-prev-btn', '.main-next-btn');
    carousel('.main-slider-item', 'vertical');
    modals();
    form('form');
});