'use strict';

import callModal from './modules/callModal';
import sendForm from './modules/sendForm';
import accordion from './modules/accordion';
import questionForm from './modules/questionForm';
import calculated from './modules/calculated';
import sendCalcForm from './modules/sendCalcForm';
import showShadowBlocks from './modules/showShadowBlocks';


callModal('call', 0);
callModal('discount', 1);
callModal('check', 2);

sendForm(document.querySelector('.section-form .capture-form'));
sendForm(document.querySelector('.main-form'));

accordion('-two');
accordion();

questionForm(document.querySelector('.director-form'));

calculated();
sendCalcForm();
showShadowBlocks();
