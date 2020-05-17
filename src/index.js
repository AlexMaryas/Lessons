'use strict';

import callModal from './modules/callModal';
import sendForm from './modules/sendForm';

callModal('call', 0);
callModal('discount', 1);

sendForm(document.querySelector('.section-form .capture-form'));
sendForm(document.querySelector('.main-form'));

