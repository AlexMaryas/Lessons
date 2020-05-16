'use strict';

import callModal from './modules/callModal';
import sendForm from './modules/sendForm';

callModal();

sendForm(document.querySelector('.section-form .capture-form'));
sendForm(document.querySelector('.main-form'));
