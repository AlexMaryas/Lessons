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
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function () {
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses = addExpenses.toLowerCase().split(', ')
        this.deposit = confirm('Есть ли у вас депозит в банке?');

        let exp = [];
        for (let i = 0; i < 2; i++) {
            exp[i] = prompt('Введите обязательную статью расходов?');
            if (exp[i-1] === exp[i]){
                i--;
            }else {
                let reserve = prompt('Во сколько это обойдётся?');
                while (isNaN(parseFloat(reserve))) {
                    reserve = prompt('Во сколько это обойдётся?');
                }
                this.expenses[exp[i]] = +reserve;
            }
        }
    },
    getExpensesMonth: function () {
        let sum = 0;
        for (let key in this.expenses) {
           sum += this.expenses[key];
        }
        return sum;
    },
    getBudget: function () {
        this.budget = this.budget - this.getExpensesMonth();
        this.budgetDay = this.budget / 30;
    },
    getTargetMonth: function () {
        let calculation = Math.ceil(this.mission / this.budget);
        if (calculation < 0) {
            return ' Цель не будет достигнута';
        }
        return `Срок достижения цели: ${calculation}`;
    },
    getStatusIncome: function() {
        if ( this.budgetDay > 1200 ) {
            return('У вас высокий уровень дохода!');
        } else if( 600 < this.budgetDay && this.budgetDay < 1200 ) {
            return(' У вас средний уровень дохода');
        } else if( this.budgetDay < 600 && 0 < this.budgetDay ) {
        return(' К сожалению, ваш доход ниже среднего.');
        } else if ( this.budgetDay < 0 ) {
            return(' Что-то пошло не так');
        } else if ( this.budgetDay === 0 ) {
            return(' Ваш доход равен нулю');
        } else {
            return(' Ваш доход на месяц 18 или 32 тыс.');
        }
    }
};

appData.asking();

let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};
 
let expenses = [],
    budgetDay;

let ExpensesAmount,
    accumulatedMonth;
    
ExpensesAmount = appData.getExpensesMonth();
accumulatedMonth = appData.getBudget(),
budgetDay = accumulatedMonth / 30;

console.log('Расходы за месяц:', ExpensesAmount);
console.log('Список возможных расходов в виде массива: ', appData.addExpenses);
console.log(appData.getTargetMonth());
console.log(appData.getStatusIncome());
console.log(appData.expenses);