'use strict';
let week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],

    div = document.getElementById('div');

function getTimeremaining (NewYearDate) {
    let dateNow = new Date(),
        dayWeek = dateNow.getDay(),
        NewYear = new Date(NewYearDate).getTime(),
        timeRemaining = NewYear - dateNow.getTime(),
        timeNewYear = Math.floor(timeRemaining/1000/60/60/24);
    return {dateNow, dayWeek,timeNewYear};
}
function cases (value) {
    let val = value;
    let caseWord = '\n Хороший сегодня денёчек';
    let valStr = val.toString().slice(-2);
    if (valStr.length < 2) {
        valStr = '0' + val ;
    }    
    caseWord = ( valStr[0] === '1' || valStr[1] >= 5 || valStr[1] === '0' ) ? ' дней' :
    (valStr[1] === '1') ? ' день' :
    (valStr[1] >= '2' && valStr[1] < '5') ? ' дня' :  '';
    return caseWord;
}
function consol() {
    let getData = getTimeremaining('1 Jan 2021');
    let howDays = getData.timeNewYear.toString() +
    cases(getData.timeNewYear);
    let text = `Сегодня: ${week[getData.dayWeek]} 
        Текущее время: ${getData.dateNow.toLocaleTimeString('en')} 
        До Нового года осталось ${howDays}`;
    if (getData.dateNow.getHours() >= 0 && getData.dateNow.getHours() < 6) {
        div.innerHTML = `Доброй ночи!
        ${text}`;
    } else if(getData.dateNow.getHours() >= 6 && getData.dateNow.getHours() < 12){
        div.innerHTML = `Доброе Утро!
        ${text}`;
    }else if (getData.dateNow.getHours() >= 12 && getData.dateNow.getHours() < 18) {
        div.innerHTML = `Добрый день!
        ${text}`;
    } else {
        div.innerHTML = `Добрый вечер!
        ${text}`;
    }
}

setInterval(consol, 1000);
