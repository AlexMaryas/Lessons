const getTimeRemaining = () => {
    let nowDate = new Date();
    let dayWeek = arrDayWeek[nowDate.getDay() - 1],
        dayMonth = nowDate.getDay(),
        monthValue = nowDate.getMonth() + 1,
        month = arrMonth[monthValue - 1],
        year = nowDate.getFullYear(),
        hours = nowDate.getHours(),
        minutes = nowDate.getMinutes(),
        seconds = nowDate.getSeconds();
    return {dayWeek, dayMonth, month, year, hours, minutes, seconds, monthValue};
};
//пункт а
const declension = (DateValue, name) => {
    let str,
        count,
        arrDeclensions = [['ов','','а'], ['', 'а', 'ы'],  ['', 'а', 'ы']],
        arrDateValue = ['час', 'минут', 'секунд'];
    
    for (let i = 0; i < arrDateValue.length; i++) {
        if (arrDateValue[i] === name) {
            count = i;
            DateValue = DateValue.toString();
            if (+DateValue[DateValue.length - 1] === 0 || 
                (+DateValue[DateValue.length - 1] >= 5 && DateValue[DateValue.length - 1] <= 9) || 
                (+DateValue > 10 && DateValue < 20)) {
                str = arrDateValue[count] + arrDeclensions[count][0];
            } else if (+DateValue[DateValue.length - 1] === 1) {
                str = arrDateValue[count] + arrDeclensions[count][1];
            } else if (+DateValue[DateValue.length - 1] >= 2 && +DateValue[DateValue.length - 1] <= 4) {
                str = arrDateValue[count] + arrDeclensions[count][2];
            } else console.log('Error');
            break;

        }
    }
    return str;
};

const arrDayWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    arrMonth = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 
        'Сентября', 'Октября', 'Ноября', 'Декабря'],
    element1 = document.createElement('div'),
    element2 = document.createElement('div');
    
const timerRu = () => {
    let timer = getTimeRemaining();
    let strHours = `${timer.hours} ${declension(timer.hours,'час')}`,
        strMinutes =  `${timer.minutes} ${declension(timer.minutes,'минут')}`,
        strSeconds = `${timer.seconds} ${declension(timer.seconds,'секунд')}`;
    element1.innerHTML = `Сегодня ${timer.dayWeek}, ${timer.dayMonth} ${timer.month} ${timer.year} года, ${strHours} ${strMinutes} ${strSeconds}`;
    document.body.prepend(element1);
};

timerRu();
setInterval(timerRu,1000);
//пункт б
const timerEn = () => {
    let timer = getTimeRemaining();
    let DateValues = {dayMonth: '', year: '', hours: '', minutes: '', seconds: '', monthValue: ''};
    const validator = () => {
        for (let key in timer) {
            DateValues[key] = timer[key];
            if (timer[key].toString().length === 1) {
                DateValues[key] = '0' + DateValues[key];
            }
        }
        return DateValues;
    };
    validator();
    element2.innerHTML = `${DateValues.dayMonth}.${DateValues.monthValue}.${DateValues.year} 
        - ${DateValues.hours}:${DateValues.minutes}:${DateValues.seconds}`;
    document.body.prepend(element2);
};
timerEn();
setInterval(timerEn,1000);