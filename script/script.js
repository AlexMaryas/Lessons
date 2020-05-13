let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const nowDateWeekValue = new Date().getDay() - 1,
nowDateWeek = week[nowDateWeekValue];
console.log('nowDateWeek: ', nowDateWeek);



week.forEach( (element) => {
    let elem = document.createElement('section');
    if (nowDateWeek === element) {
        elem.style.fontWeight = 'bold';
    }
    if (element === 'Суббота' || element === 'Воскресенье') {
        elem.style.color = 'red';
        elem.style.fontStyle = 'italic';
    }
    elem.append(element);
    document.body.append(elem);
});