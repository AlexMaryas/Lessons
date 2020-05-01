window.addEventListener('DOMContentLoaded',function() {
    'use strict';
    //timer
    function countTimer (deadline) {
        let timerHours = document.getElementById('timer-hours'),
            timerMinutes = document.getElementById('timer-minutes'),
            timerSeconds = document.getElementById('timer-seconds');
        function getTimeremaining () {
            let dateNow = new Date().getTime(),
            dateStop = new Date(deadline).getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor((timeRemaining / 60 / 60));
            return {hours, minutes, seconds, timeRemaining};
        }

        
        function updateClock () {
            let timer = getTimeremaining();
            if (timer.timeRemaining <= 0) {
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
                clearInterval(idIntervalUpdateClock);
            } else {
                timer.hours < 10 ? timerHours.textContent = '0' + timer.hours :
                timerHours.textContent = timer.hours;
                timer.minutes < 10 ? timerMinutes.textContent = '0' + timer.minutes :
                timerMinutes.textContent = timer.minutes;
                timer.seconds < 10? timerSeconds.textContent = '0' + timer.seconds :
                timerSeconds.textContent = timer.seconds;

            }
        }
            let idIntervalUpdateClock = setInterval (updateClock, 1000);
            
            
        
    }
    countTimer(' 24 April 2020');
        //menu
        const toggleMenu = function () {
            const btnMenu = document.querySelector('.menu'),
                  menu = document.querySelector('menu'),
                  closeBtn = menu.querySelector('.close-btn'),
                  menuItems = menu.querySelectorAll('ul > li');
            const serviceBlock = document.getElementById('service-block'),
                portfolio = document.getElementById('portfolio'),
                calc = document.getElementById('calc'),
                command = document.getElementById('command'),
                connect = document.getElementById('connect'),
                arrMenuLi = [serviceBlock, portfolio, calc, command, connect];

            const handlerMenu = (target) => {
                menu.classList.toggle('active-menu');
                menuItems.forEach((elem, i) =>{
                    if (menuItems[i].firstChild === target) {
                        let countPx = 10;
                        let int = setInterval(()=>{
                            countPx += 5 * (i**1.7+6);
                            document.documentElement.scrollTo(0, 0);
                            document.documentElement.scrollBy(0, countPx);
                            if ((arrMenuLi[i].offsetTop) <= document.documentElement.scrollTop){
                                clearInterval(int);
                            }
                        },10);
                    }
                });   
            };
            
            btnMenu.addEventListener('click', handlerMenu);
            closeBtn.addEventListener('click', handlerMenu);
            
            menuItems.forEach((elem) => elem.addEventListener('click',(event)=> {
                event.preventDefault();
                let target = event.target;
                handlerMenu(target);
            }));
            
            //scroll
            
        };
        toggleMenu();
        //popup
        const togglePopup = () => {
            const popup = document.querySelector('.popup'),
                  popupBtn = document.querySelectorAll('.popup-btn'),
                  popupClose = document.querySelector('.popup-close'),
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
            popupClose.addEventListener('click', () => popup.style.display = 'none');

        };
        togglePopup();

});