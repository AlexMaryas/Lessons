import callModal from './callModal';

const calculated = () => {
    const checkbox = document.querySelector('#collapseOne input'),
        selectBoxes = document.querySelectorAll('#collapseTwo .select-box');
    const inputs = Array.from(document.querySelectorAll('.panel-group input')),
        selects = Array.from(document.querySelectorAll('.panel-group select')),
        calcResult = document.getElementById('calc-result'),
        inputsSelects = selects.concat(inputs);

    const initObj = () => {
        let selectBoxesVal = Array.from(document.querySelectorAll('.panel-group select')).map(item =>  item.options[item.selectedIndex].textContent),
            inputs = document.querySelectorAll('.panel-group input');
        let objForm =  {
            'camera_two': !inputs[0].checked,
            'diameters': [selectBoxesVal[0], selectBoxesVal[2]],
            'rings_number': [selectBoxesVal[1], selectBoxesVal[3]],
            'bottom': inputs[1].checked,
            'distance': inputs[2].value,
            'calc_result': calcResult.value
        };
        return objForm;
    };
    let count = 1.5;

    const numberCamerasToggle = () => {
        const textTwoWell = collapseTwo.querySelectorAll('#collapseTwo .title-text')[1];
        checkbox.checked = false;
        checkbox.addEventListener('click', () => {
            for (let i = 2; i < selectBoxes.length; i++) {
                if (checkbox.checked) {
                    count = 1;//for result
                    selectBoxes[i].style.display = 'none';
                    textTwoWell.style.display = 'none';
                    selectBoxes[i].querySelector('select').options[0].selected = true;
                } else {
                    count = 1.5;//for result
                    selectBoxes[i].style.display = 'inline-block';
                    textTwoWell.style.display = 'inline-block';
                }
            }
        });
    };

    const result = () => {
        const bottomAvailability = document.getElementById('collapseThree').querySelector('input'),
            bottomValue = () => {
                let value = 0;
                if (bottomAvailability.checked) {
                    value = 1000;
                    if (!checkbox.checked) {
                        value *= 2;
                    }
                }
                return value;
            };
        
        inputsSelects.forEach(element => element.addEventListener('change', () => {
            const selectBoxValue = Array.from(selectBoxes).map(item => item.querySelector('select')
                .options[item.querySelector('select').selectedIndex].value)
                    .reduce((accum, item) => {
                        return accum * item;
                    });
            let res = Math.round(10000 * count * selectBoxValue + bottomValue());
            calcResult.value = res;
        }));
        
    };

    numberCamerasToggle();
    result();
    document.querySelector('#collapseFour button').addEventListener('mousedown',() => {
        let addObj = initObj();
        callModal('discount', 3, addObj, inputs, selects);
    });

};
export default calculated;