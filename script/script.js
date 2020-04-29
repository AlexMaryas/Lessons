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

        const handlerMenu = (target) => {
            console.log(target);
            if (target.parentNode.matches('.menu') || target.matches('.close-btn') ||
            target.parentNode.matches('menu>ul>li') || target.matches('.menu')) {
                document.querySelector('menu').classList.toggle('active-menu');
            }
        };
        
        document.addEventListener('click', (event) =>{
            let target = event.target;
            handlerMenu(target);
            console.log(target);
        });
    };
    toggleMenu();
    //popup
    const togglePopup = () => {
        const popup = document.querySelector('.popup'),
                popupBtn = document.querySelectorAll('.popup-btn'),
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
        popup.addEventListener('click', (item) => {
            let target = item.target;
            if (target.classList.contains('.popup-close')) {
                popup.style.display = 'none';
            } else{
                target = target.closest('.popup-content');
                if (!target) {
                    popup.style.display = 'none';
                }
            }
        });
    };
    togglePopup();
    //табы
    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
              tab = tabHeader.querySelectorAll('.service-header-tab'),
              tabContent = document.querySelectorAll('.service-tab');
        const toggleTabContent = (index) => {
            for (let i = 0; i < tabContent.length; i++) {
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };
        tabHeader.addEventListener('click',(event) => {
            let target = event.target.closest('.service-header-tab');
            if (target) {
                tab.forEach((item, i) => {
                    if (item === target) {
                        toggleTabContent(i);
                    }
                });
            }
            
        });
    };
    tabs();
});