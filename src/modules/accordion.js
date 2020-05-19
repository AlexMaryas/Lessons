const accordion = (two = '') => {    
    const selectorValues = [`collapseOne${two}`, `collapseTwo${two}`, `collapseThree${two}`];
    if (two === '') {
        selectorValues.push('collapseFour');
    }
    let panels = [],
        headers = [],
        buttons = [];
    selectorValues.forEach( (value, index) => {
        panels[index] = document.getElementById(value);
        headers[index] = document.querySelector(`[aria-controls = ${value}]`);
        buttons[index] = document.querySelectorAll('.next-step')[index];
    });
    buttons = buttons.filter( (val) => val !== undefined);

    const toggle = () => {
        headers.forEach( (header, key) => {
            header.addEventListener('click', () => {
                event.preventDefault();
                const active = panels.find( (item) => item.matches('.in'));
                panels[key].classList.toggle('in');
                if (two !== '' && active) {
                    active.classList.remove('in');
                }
            });
        });
        buttons.forEach( (button, key) => {
            button.addEventListener('click', () => {
                event.preventDefault();
                panels[key+1].classList.add('in');
            });
        });
    };
    toggle();
};
export default accordion;