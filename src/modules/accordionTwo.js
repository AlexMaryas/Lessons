const accordionTwo = () => {
    const selectorValues = [`collapseOne-two`, `collapseTwo-two`, `collapseThree-two`];
    let panels = [],
        headers = [];
    selectorValues.forEach( (value, index) => {
        panels[index] = document.getElementById(value);
        headers[index] = document.querySelector(`[aria-controls = ${value}]`);
    });

    
    headers.forEach( (header, key) => {
        header.addEventListener('click', () => {
            const active = panels.find( (item) => item.matches('.in'));
            panels[key].classList.toggle('in');
            if (active) {
                active.classList.remove('in');
            }
        });
    });
};
export default accordionTwo;