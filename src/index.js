'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

//timer
countTimer(' 8 May 2020');
//menu
toggleMenu();
//popup
togglePopup();
//табы
tabs();
//слайдер
slider();
//калькулятор
calc(100);
//send-ajax-form
const formOne = document.getElementById('form1');
const formTwo = document.getElementById('form2');
const formThree = document.getElementById('form3');
sendForm(formOne);
sendForm(formTwo);
sendForm(formThree);