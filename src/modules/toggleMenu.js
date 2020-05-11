const toggleMenu = function () {

    const handlerMenu = (target) => {
        if (target.parentNode.matches('.menu') || target.matches('.close-btn') ||
        target.parentNode.matches('menu>ul>li') || target.matches('.menu')) {
            document.querySelector('menu').classList.toggle('active-menu');
        }
    };
    
    document.addEventListener('click', (event) =>{
        let target = event.target;
        handlerMenu(target);
    });
};

export default toggleMenu;