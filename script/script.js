let money,
    start = function () {
        do{
            money = prompt('Ваш месячный доход?');
        } 
        while (isNaN(money) || money === '' || money === null);
    };

start();

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 50000,
    period: 3,
    asking: function (params) {
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses = addExpenses.toLowerCase().split(', ')
        this.deposit = confirm('Есть ли у вас депозит в банке?');
    }
}

let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};
 
let expenses = [],
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
};



const getExpensesMonth = function (cost1, cost2) {
    let sum = 0;
    for (let i = 0; i < 2; i++) {

        expenses[i] = prompt('Введите обязательную статью расходов?');
        let reserve = +prompt('Во сколько это обойдётся?');
        while (!isNumber(reserve)) {
            reserve = +prompt('Во сколько это обойдётся?');
        }
        sum += reserve;
    }
    return +sum;
},

      getAccumulatedMonth = function (profit, cost) {
          return +profit - cost;
      },

      getTargetMonth = function (target, netProfit) {
          let calculation = Math.ceil(target / netProfit);
          if (calculation < 0) {
              return ' Цель не будет достигнута';
          }
          return `Срок достижения цели: ${calculation}`;
      };


let ExpensesAmount,
    accumulatedMonth;
    budgetDay = accumulatedMonth / 30;


ExpensesAmount = getExpensesMonth();
accumulatedMonth = getAccumulatedMonth(money,ExpensesAmount);



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

console.log('Расходы за месяц:', ExpensesAmount);
console.log('Список возможных расходов в виде массива: ', appData.addExpenses);
if( getTargetMonth);
console.log(getTargetMonth(appData.mission, accumulatedMonth));
console.log(getStatusIncome());
