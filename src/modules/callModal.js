import sendForm from './sendForm';

const callModal = (selector, number, additionalForm = null, sel = null, inp = null) => {
    let btnsSlctrs = ['.contacts>.call-btn', '.discount-btn', '.gauging-button','.panel-body .call-btn', '.director-btn'],
        callBtn = document.querySelectorAll(btnsSlctrs[number]),
        popup = document.querySelector(`.popup-${selector}`);
    let count = 0;

    callBtn.forEach( elem => {
        elem.addEventListener('click', () => {
            event.preventDefault();
            popup.style.display = 'block';
            popup.addEventListener('click', (event) => {
                const popupClose = popup.querySelector('.popup-close');
                const target = event.target;
                if (target === popupClose || target === popup) {
                    popup.style.display = 'none';
                }
            });
            if (count === 0) {
                sendForm(popup.querySelector('form'), additionalForm, sel, inp);
                count++;
            }
        });
    });
};

export default callModal;