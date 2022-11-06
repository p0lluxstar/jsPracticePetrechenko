import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';
import images from './modules/images';

window.addEventListener('DOMContentLoaded', () =>{ // глобальный обработчик событий, эта команда отвечает за то что скрипты будут начнут исполняться только после того как будез загружен дом дерево
    'use strict';

    let modalState = {};
    let deadline = '2022-12-31'; // до какого числа обратный отсчет таймера

    changeModalState(modalState);

    modals();
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active'); // передаем классы табов
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click'); // передаем классы табов
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    forms(modalState);
    timer('.container1', deadline);
    images();
});