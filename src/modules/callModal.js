const callModal = (selector,number) => {
    let btnsSlctrs = ['.contacts>.call-btn', '.discount-btn', '.gauging-button'],
        callBtn = document.querySelectorAll(btnsSlctrs[number]),
        popup = document.querySelector(`.popup-${selector}`);

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
        });
    });
};

export default callModal;