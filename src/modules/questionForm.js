import sendForm from './sendForm';

const questionForm = (form) => {
    const popup = document.querySelector('.popup-consultation');
    let question = {};

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        formData.forEach((val, key) => {
            question[key] = val;
        });
        form.querySelector('input').value = '';
        popup.style.display = 'block';
    });
    popup.addEventListener('click', () => {
        const popupClose = popup.querySelector('.popup-close');
        const target = event.target;
        if (target === popupClose || target === popup) {
            popup.style.display = 'none';
        }
    });
    sendForm(popup.querySelector('.capture-form'), question)
        
};
export default questionForm;