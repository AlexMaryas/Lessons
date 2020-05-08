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

        let idIntervalUpdateClock;
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
            idIntervalUpdateClock = setInterval (updateClock, 1000);
            
            
        
    }
    countTimer(' 8 May 2020');
    //menu
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
    //слайдер
    const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item'),
            slider = document.querySelector('.portfolio-content'),
            commandPhoto = document.querySelectorAll('.command__photo');
        
        let currentSlide = 0,
            dot = document.querySelectorAll('.dot'),
            interval;
        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };
        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };

        const dotLiCreator = () => {
            let ul = document.querySelector('.portfolio-dots');
            for (let i = 0; i < slide.length; i++) {
                const li = document.createElement('li');
                li.classList.add('dot');
                ul.append(li);
            }
            dot = document.querySelectorAll('.dot');
        };
        const autoPlaySlide = () => {
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };
        const startSlide = (time = 2000) => {
            interval = setInterval(autoPlaySlide, time);
        };
        const stopSlide = () => {
            clearInterval(interval);
        };
        
        dotLiCreator();
        slider.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;
            if (!target.matches('.portfolio-btn, .dot')) return;
            
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            if (target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('#arrow-right')) {
                currentSlide++;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    }
                });
            }
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            } else if (currentSlide < 0) {
                currentSlide = slide.length-1;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        });

        slider.addEventListener('mouseover', (event) => {
            if (event.target.matches('.portfolio-btn') || 
            event.target.matches('.dot')) {
                stopSlide();
            } 
        });
        slider.addEventListener('mouseout', (event) => {
            if (event.target.matches('.portfolio-btn') || 
            event.target.matches('.dot')) {
                startSlide();
            }
        });
        commandPhoto.forEach( (elem) => {
            let reserveString;
            elem.addEventListener('mouseenter', (e) => {
                reserveString = event.target.src;
                event.target.src = event.target.dataset.img;
            });
            elem.addEventListener('mouseleave', (e) => {
                event.target.dataset.img = event.target.src;
                event.target.src = reserveString;
            });
        });

        startSlide(2000);
    };
    slider();
    //калькулятор
    const calc = (price = 100) => {
        const calcBlock = document.querySelector('.calc-block'),
            calcType = document.querySelector('.calc-type'),
            calcSquare = document.querySelector('.calc-square'),
            calcDay = document.querySelector('.calc-day'),
            calcCount = document.querySelector('.calc-count'),
            totalValue = document.getElementById('total');

        const countSum = () => {
            let total = 0,
                countValue = 1,
                dayValue = 1;
            const typeValue = calcType.options[calcType.selectedIndex].value,
                squareValue = +calcSquare.value;

            if (calcCount.value > 1) {
                countValue += (calcCount.value -1) / 10;
            }

            if (calcDay.value && calcDay.value < 5) {
                dayValue *= 2;
            } else if (calcDay.value <10) {
                dayValue *= 1.5;
            }

            if  (typeValue && squareValue) {
                total = price * typeValue * squareValue * countValue * dayValue;
            }

            totalValue.textContent = total;
        }
    
        calcBlock.addEventListener('change', () =>{
            const target = event.target;
            console.log(target);
            if (target.matches('input') || target.matches('select')) {
                countSum();
            }
        });
    };

    calc(100);
        //send-ajax-form
        const formOne = document.getElementById('form1');
        const formTwo = document.getElementById('form2');
        const formThree = document.getElementById('form3');
        const sendForm = (form) => {
            const errorMessage = 'Что-то пошло не так',
                loadMessage = ``,
                successMessage = 'Готово!';
    
            const statusMessage = document.createElement('div');
            statusMessage.style.cssText = `
                width: 40px;
                height: 40px;
                background-color: #333;
                border-radius: 100%;
                animation: sk-pulse 1.2s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955); 
              `;
              statusMessage.animate([
                // keyframes
               {transform: `scale(0)`, offset: 0}, 
               {transform: `scale(1)` ,offset: 1},
               {transform: `opacity: 0`, offset: 1}
              ], {
                // timing options
                duration: 1000,
                iterations: Infinity
              });

            const clearForm = () => {
                let formInputs = form.querySelectorAll('input');
                        formInputs.forEach((val) => {
                            val.value = '';
                        });
            };
            
            form.addEventListener('submit', (event) => {
                event.preventDefault();
                form.appendChild(statusMessage);
                statusMessage.innerHTML = loadMessage;
                const formData = new FormData(form);
                let body = {};
                formData.forEach((val, key) => {
                    body[key] = val;
                });

                
                const arrInpId = ['name', 'phone', 'message'];
                let userInputs = [];
                for (let i = 0; i < arrInpId.length; i++) {
                    let input = form.querySelector(`[name="user_${arrInpId[i]}"]`);
                    if(input) {
                        userInputs[i] = input.value;
                    }
                }
                let nameValues = `/${userInputs[0]}/`.match(/[\s]|[a-z]|[а-я]/gi),
                    phoneValues = `/${userInputs[1]}/`.match(/[8|\+]|[\d]/g),
                    messageValues = `/${userInputs[2]}/`.match(/[\s]|[a-z]|[а-я]/gi),
                    userValues = [nameValues, phoneValues, messageValues];

                for (let i = 0; i < userInputs.length; i++) {
                    let count = 0;
                    if(userValues[i] === null || userInputs[i] !== userValues[i].join('')) {
                        count++;
                    }
                    if (count !== 0) {
                        statusMessage.textContent = 'Данные введены некорректно!';
                        return;
                    }
                }
                


                postData(body, () => {
                    statusMessage.textContent = successMessage;
                }, () => {
                    statusMessage.textContent = errorMessage;
                });
                clearForm();
            });
            const postData = (body, outputData, errorData) => {
                const request = new XMLHttpRequest();
                request.addEventListener('readystatechange', () => {
                    if (request.readyState !== 4) {
                        return;
                    }
                    if (request.status === 200) {
                        outputData();
    
                    } else {
                        errorData(request.status);
                    }
                });
                request.open('POST', './server.php');
                request.setRequestHeader('Content-Type', 'application/json');
                
                
                request.send(JSON.stringify(body));
            };
    
        };
        sendForm(formOne);
        sendForm(formTwo);
        sendForm(formThree);
});