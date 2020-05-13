//1пункт
const weekDaysRu = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    weekDaysEn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    weekDays = [weekDaysRu, weekDaysEn];
    question = prompt('Choose language: "ru"-русский или "en"-english', 'ru'),
    question2 = prompt('Choose language: 0 - русский, 1 - english', 0);
const result = (value) => {
    value.forEach(element => {
        console.log(element);
    });
};
//a
if (question === 'ru') {
    result(weekDaysRu);
} else if (question === 'en') {
    result(weekDaysEn);
} 
//b
switch(question) {
    case 'ru':
        result(weekDaysRu);
    case 'en':
        result(weekDaysEn);
}
//c
result(weekDays.question2);
//2пункт
const namePerson = prompt('Введите свое имя: ');

namePerson === 'Артем' ? console.log('Директор') : namePerson === 'Максим' ? 
    console.log('преподаватель') : console.log('студент');