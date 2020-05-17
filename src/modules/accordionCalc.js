const accordionCalc = () => {
    const selectorValues = [`collapseOne`, `collapseTwo`, `collapseThree`,'collapseFour'];
    let panels = [],
        headers = [],
        buttons = [];
    selectorValues.forEach( (value, index) => {
        panels[index] = document.getElementById(value);
        headers[index] = document.querySelector(`[aria-controls = ${value}]`);
        buttons[index] = document.querySelectorAll('.next-step')[index];

    });
    buttons = buttons.filter( (val) => val !== undefined);
    console.log('buttons: ', buttons);

    headers.forEach( (header, key) => {
        header.addEventListener('click', () => {
            panels[key].classList.toggle('in');
        });
    });
    buttons.forEach( (button, key) => {
        button.addEventListener('click', () => {
            panels[key+1].classList.add('in');
        });
    });
};

export default accordionCalc;