let money,
income = 'Казино',
addExpenses = 'интернет, такси, коммуналка',
deposit = true,
mission = 500000,
period = 12,
budgetDay,
num = 266219;

//функция для 2-го усложнённого задания
let showResult = (value) => {
let getString = value.toString().split('');
let result = 1;
for (let i = 0; i < getString.length; i++) {
result *= +getString[i];
}
let exponentiation = result**3;
console.log(result);
console.log('Две первые цифры числа, возведённого в третью степень:',
exponentiation.toString()[0] +exponentiation.toString()[1]);
};
let stringToArray = function (string) {
return string.toLowerCase().split(', ');
}
let showTypeOf = function (data) {
console.log(typeof(data));
};
const getExpensesMonth = function (cost1, cost2) {
return +cost1 + +cost2;
},
getAccumulatedMonth = function (profit, cost) {
return +profit - cost;
},
getTargetMonth = function (target, netProfit) {
return Math.ceil(target / netProfit);
};

money = prompt('Ваш месячный доход?');
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
deposit = confirm('Есть ли у вас депозит в банке?');
expenses1 = prompt('Введите обязательную статью расходов?');
expenses2 = prompt('Введите обязательную статью расходов?');
amount1 = prompt('Во сколько это обойдётся?');
amount2 = prompt('Во сколько это обойдётся?');

const ExpensesMonth = getExpensesMonth(amount1, amount2),
accumulatedMonth = getAccumulatedMonth(money,ExpensesMonth);
budgetDay = accumulatedMonth / 30;



let getStatusIncome = function() {
if ( budgetDay > 1200 ) {
return('У вас высокий уровень дохода!');
} else if( 600 < budgetDay && budgetDay < 1200 ) {
return(' У вас средний уровень дохода');
} else if( budgetDay < 600 && 0 < budgetDay ) {
return(' К сожалению, ваш доход ниже среднего.');
} else if ( budgetDay < 0 ) {
return(' Что-то пошло не так');
} else if ( budgetDay === 0 ) {
return(' Ваш доход равен нулю');
} else {
return(' Ваш доход на месяц 18 или 32 тыс.');
}
};


showResult(num);

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log('Расходы за месяц:', ExpensesMonth);
console.log('Список возможных расходов в виде массива: ', stringToArray(addExpenses));
console.log('Срок достижения цели в месяцах: ', getTargetMonth(mission, accumulatedMonth));
console.log('budgetDay: ', Math.floor(budgetDay));
console.log(getStatusIncome());
