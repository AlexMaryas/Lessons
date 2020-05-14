const callModal = () => {
    const callBtn = document.querySelectorAll('.contacts>.call-btn'),
        popupCall = document.querySelector('.popup-call');

    callBtn.forEach( elem => {
        elem.addEventListener('click', () => {
            popupCall.style.display = 'block';
            popupCall.addEventListener('click', (event) => {
                const popupClose = document.querySelector('.popup-close');
                const target = event.target;
                
                if (target === popupClose || target === popupCall) {
                    popupCall.style.display = 'none';
                }
            });
        });
    });
};

export default callModal;