
let money = 100,
    income = 'Казино',
    addExpenses = 'интернет, такси, коммуналка',
    deposit = true,
    mission = 500000,
    period = 12,
    budgetDay = money/30,
    num = 266219;
    
let showResult = (value) => {
    let getString = value.toString().split('');
    let result = 1;
    for (let i = 0; i < getString.length; i++) {
        result *= +getString[i];
    }
    let exponentiation = result**3;
    console.log(result);
    console.log('exponentiationTwoSymbols:', exponentiation.toString()[0] +
    exponentiation.toString()[1]);
} 



money = prompt('Ваш месячный доход?'); 
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
deposit = confirm('Есть ли у вас депозит в банке?');
expenses1 = prompt('Введите обязательную статью расходов?');      
expenses2 = prompt('Введите обязательную статью расходов?');
amount1 = prompt('Во сколько это обойдётся?');       
amount2 = prompt('Во сколько это обойдётся?'); 
budgetMonth  =  money - amount1;
budgetDay = budgetMonth / 30;
showResult(num);

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log(`Период равен ${period} месяцев`);
console.log(`Цель заработать ${mission} рублей`);

console.log('addExpensesLowerCase: ', addExpenses.toLowerCase().split(', '));
console.log('budgetDay: ', Math.floor(budgetDay));
console.log(addExpenses);
console.log(Math.ceil(mission / budgetMonth));

if ( budgetDay > 1200 ) {
    console.log('У вас высокий уровень дохода!');
} else if( 600 < budgetDay && budgetDay < 1200 ) {
    console.log(' У вас средний уровень дохода');
} else if( budgetDay < 600 ) {
    console.log(' К сожалению, ваш доход ниже среднего.');
} else if ( budgetDay < 0 ) {
    console.log(' Что-то пошло не так');
} else if ( budgetDay = 0 ) {
    console.log(' Ваш доход равен нулю');
} else {
    console.log(' Ваш доход на месяц 18 или 32 тыс.');
}