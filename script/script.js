window.addEventListener('DOMContentLoaded',function() {
    'use strict';
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
});