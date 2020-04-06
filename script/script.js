let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
    start = function () {
        do{
            money = prompt('Ваш месячный доход?');
        } 
        while (!isNumber(money));
    };

start();

let appData = {
    income: {},
    addIncome: [],
    expenses: {}, //eee
    addExpenses: [], //еее
    deposit: false, //eee 
    mission: 50000,
    period: 3,//eee
    budget: money,//eee
    budgetDay: 0,//eee
    budgetMonth: 0,//eee
    expensesMonth: 0,
    asking: function () {
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        this.addExpenses = addExpenses.toLowerCase().split(', ');
        this.deposit = confirm('Есть ли у вас депозит в банке?');

        let exp = [];
        for (let i = 0; i < 2; i++) {
            exp[i] = prompt('Введите обязательную статью расходов?');
            if (exp[i-1] === exp[i]){
                i--;
            }else {
                let reserve;
                do {
                   reserve = prompt('Во сколько это обойдётся?');
                }
                while (!isNumber(reserve));
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
        this.budgetMonth = this.budget - this.getExpensesMonth();
        this.budgetDay = this.budgetMonth / 30;

    },
    getTargetMonth: function () {
        this.period = Math.ceil(this.mission / this.budgetMonth);
        if (this.period < 0) {
            return ' Цель не будет достигнута';
        }
        return `Срок достижения цели: ${this.period}`;
    },
    getStatusIncome: function () {
        if ( this.budgetDay > 1200 ) {
            return('У вас высокий уровень дохода!');
        } else if( 600 < this.budgetDay && this.budgetDay < 1200 ) {
            return(' У вас средний уровень дохода');
        } else if( this.budgetDay < 600 && 0 < this.budgetDay ) {
        return(' К сожалению, ваш доход ниже среднего.');
        } else if ( this.budgetDay < 0 ) {
            return(' Что-то пошло не так, вы тратите больше, чем у вас есть!');
        } else if ( this.budgetDay === 0 ) {
            return(' Ваш доход равен нулю');
        } else {
            return(' Ваш доход на месяц 18 или 32 тыс.');
        }
    },
    objectIncludes: function () {   
        console.log('Наша программа включает в себя данные: ');
        for (let key in appData) {
            console.log('Свойство: ' + key + ' Значение: ' + appData[key]);
        }

    }
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();
console.log('Расходы за месяц: ', appData.getExpensesMonth());
console.log('За какой период будет достигнута цель (в месяцах): ', appData.getTargetMonth());
console.log('Уровень дохода: ', appData.getStatusIncome());
appData.objectIncludes();
