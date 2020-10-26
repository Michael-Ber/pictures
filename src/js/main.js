import carousel from "./modules/carousel";
import modals from "./modules/modals";
import form from "./modules/form";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";
import moreStyles from "./modules/moreStyles";
import calculator from "./modules/calculator";
import tabs from "./modules/tabs";
import hoverPic from "./modules/hoverPic";

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const obj = {};
    carousel('.feedback-slider-item','horizontal' ,'.main-prev-btn', '.main-next-btn');
    carousel('.main-slider-item', 'vertical');
    modals();
    form('form', obj);
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    moreStyles('.button-styles', '.styles .row', 'col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1', 'hidden-lg hidden-md hidden-sm hidden-xs styles-2');
    calculator('#size', '#material', '#options', '.promocode', '.calc-price', obj);
    tabs('.portfolio-menu', '.portfolio-block');
    hoverPic();
});