'use strict';

import callModal from './modules/callModal';
import sendForm from './modules/sendForm';
import accordionTwo from './modules/accordionTwo';
import questionForm from './modules/questionForm';
import accordionCalc from './modules/accordionCalc';

callModal('call', 0);
callModal('discount', 1);
callModal('check', 2);

sendForm(document.querySelector('.section-form .capture-form'));
sendForm(document.querySelector('.main-form'));

accordionTwo();

questionForm(document.querySelector('.director-form'));

accordionCalc();
