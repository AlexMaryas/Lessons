const togglePopup = () => {
    const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popupContent = popup.querySelector('.popup-content'),
            screenWidth = document.documentElement.clientWidth;

    popupBtn.forEach((elem) => elem.addEventListener('click', () => {
        popup.style.display = 'block';
        if (screenWidth >= 768) {
            popupContent.style.transform = `translate(0,-100%)`;
            let count = 0;
            let animateModal = setInterval(() => {
                count++;
                popupContent.style.transform = `translate(0,${-100+count/2}%)`;
                if (popupContent.style.transform === `translate(0px, 0%)`) {
                    clearInterval(animateModal);
                }
            }, 1);
        }
    }));
    popup.addEventListener('click', (item) => {
        let target = item.target;
        if (target.classList.contains('.popup-close')) {
            popup.style.display = 'none';
        } else{
            target = target.closest('.popup-content');
            if (!target) {
                popup.style.display = 'none';
            }
        }
    });
};

export default togglePopup;