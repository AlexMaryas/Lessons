const accordionTwo = () => {
    const selectorValues = ["collapseOne-two", "collapseTwo-two", "collapseThree-two"];
    let panels = [];
    selectorValues.forEach( (value, index) => {
        panels[index] = document.getElementById(value);
    });

    selectorValues.forEach( (val, key) => {
        document.querySelector(`[aria-controls = ${val}]`).addEventListener('click', () => {
            panels.forEach((value) => {
                value.classList.remove('in');
            });
            panels[key].classList.add('in');
        });
    });
};
export default accordionTwo;