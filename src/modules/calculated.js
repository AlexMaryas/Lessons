const calculated = () => {
    const checkbox = collapseOne.querySelector('#collapseOne input'),
        selectBoxes = collapseTwo.querySelectorAll('#collapseTwo .select-box');
    let count = 1.5;

    const numberCamerasToggle = () => {
        const textTwoWell = collapseTwo.querySelectorAll('#collapseTwo .title-text')[1];

        checkbox.addEventListener('click', () => {
            for (let i = 2; i < selectBoxes.length; i++) {
                if (!checkbox.checked) {
                    count = 1;
                    selectBoxes[i].style.display = 'none';
                    textTwoWell.style.display = 'none';
                    selectBoxes[i].querySelector('select').options[0].selected = true;
                } else {
                    count = 1.5;
                    selectBoxes[i].style.display = 'inline-block';
                    textTwoWell.style.display = 'inline-block';
                }
            }
        });
    };

    const result = () => {
        const bottomAvailability = document.getElementById('collapseThree').querySelector('input'),
            calcResult = document.getElementById('calc-result'),
            bottomValue = () => {
                let value = 0;
                if (bottomAvailability.checked) {
                    value = 1000;
                    if (checkbox.checked) {
                        value *= 2;
                    }
                }
                return value;
            };
        const panelGroup = document.querySelector('.panel-group'),
            inputs = panelGroup.querySelectorAll('input'),
            selects = panelGroup.querySelectorAll('select'),
            inputsSelects = [];
            inputs.forEach( (value) => {
                inputsSelects.push(value);
            });
            selects.forEach( (value) => {
                inputsSelects.push(value);
            });
        
        
        inputsSelects.forEach(element => element.addEventListener('change', () => {
            const sbox = Array.from(selectBoxes);
            const selectBoxValue = sbox.map(item => item.querySelector('select')
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
};

export default calculated;