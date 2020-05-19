import sendForm from './sendForm';

const sendCalcForm = () => {
    
    document.querySelector('#collapseFour button').addEventListener('click', (event) => {
        const checkbox1Val = document.querySelector('#collapseOne input'),
            selectBoxesVal =  Array.from(document.querySelectorAll('.select-box>select'))
                .map(item =>  item.options[item.selectedIndex].textContent),
            checkbox2Val = document.querySelector('#collapseThree input'),
            calcResult = document.getElementById('calc-result'),
            distanceVal = document.querySelector('#collapseFour input'),
            popup = document.querySelector('.popup-discount');
            
        event.preventDefault();
        const formInputs = [checkbox1Val.checked, [selectBoxesVal[0], selectBoxesVal[2]], 
            [selectBoxesVal[1], selectBoxesVal[3]], checkbox2Val.checked, distanceVal.value, calcResult.value];
        let objForm =  {
            'camera_two': formInputs[0],
            'diameters': formInputs[1],
            'rings_number': formInputs[2],
            'bottom': formInputs[3],
            'distance': formInputs[4],
            'calc_result': formInputs[5]
        };
        popup.style.display = 'block';
        popup.addEventListener('click', (event) => {
            const popupClose = popup.querySelector('.popup-close');
            const target = event.target;

            if (target === popupClose || target === popup) {
                popup.style.display = 'none';
            }
        });
    });
    sendForm(popup.querySelector('form'), objForm);
};
export default sendCalcForm;