'use strict';

let start = document.getElementById('start'),
      incomePlus = document.getElementsByTagName('button')[0],
      expensesPlus = document.getElementsByTagName('button')[1],
      additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
      depositCheck = document.querySelector('#deposit-check'),
      budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
      budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
      expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
      accumulatetedMonthValue = document.getElementsByClassName('accumulateted_month-value')[0],
      additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
      additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0], 
      incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
      targetMonthValue = document.getElementsByClassName('target_month-value')[0],
      resultTotal = document.getElementsByClassName('result-total'),
      salaryAmount = document.querySelector('.salary-amount'),
      incomeTitle = document.querySelector('.income-title'),
      incomeAmount = document.querySelector('.income-amount'),
      expensesTitle = document.querySelector('.expenses-title'),
      expensesItems = document.querySelectorAll('.expenses-items'),
      additionalExpenses = document.querySelector('.additional_expenses'),
      periodSelect = document.querySelector('.period-select'),
      additionalExpensesItem = document.querySelector('.additional_expenses-item'),
      targetAmount = document.querySelector('.target-amount'),
      depositAmount = document.querySelector('.deposit-amount'),
      depositPercent = document.querySelector('.deposit-percent');

let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let appData = {
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    income: {},
    addIncome: [],
    expenses: {},
    expensesMonth: 0,
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 50000,
    period: 3,
    start: function () {
        if (salaryAmount.value === '') {
            alert('Ошибка, поле "Месячный доход" должно быть заполнено!');
            return;
        }
        appData.budget = salaryAmount.value;
        console.log('salaryAmount.value: ', salaryAmount.value);

        appData.getExpenses();

        appData.getExpensesMonth();
        appData.getBudget();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.showResult();
    },
    showResult: function () {
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = appData.budgetDay;
        expensesMonthValue.value = appData.expensesMonth;
        additionalExpensesValue.value = appData.addExpenses.join(', ');
        additionalIncomeValue.value = appData.addIncome.join(', '); 
        targetMonthValue.value = appData.getTargetMonth();
    },
    addExpensesBlock: function () {
        
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem,expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');
        if (expensesItems.length === 3) {
            expensesPlus.style.display = 'none';
        }
    },
    getExpenses: function () {
        expensesItems.forEach(function (item) {
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelectorAll('.expemses-amount').value;
            if (itemExpenses !== '' && cashExpenses !== '') {
                appData.expenses[itemExpenses] = cashExpenses;
            }
        });
    },
    getAddExpenses: function () {
        let addExpenses = additionalExpensesItem.value.split(', ');
        addExpenses.forEach(function (item) {
            item = item.trim();
            if (item !== '') {
                appData.addExpenses.push(item);
            }
        });
    },
    getAddIncome: function () {
        additionalIncomeItem.forEach(function (item) {
            let itemValue = item.value.trim();
            if (itemValue !== '') {
                appData.addIncome.push(itemValue);
            }
        });
    },
    asking: function () {

        if (confirm('Есть ли у вас дополнительный источник заработка?')) {
            let itemIncome = prompt('Какой у вас дополнительный заработок?', 'Таксую'),
                cashIncome = prompt('Сколько в месяц вы зарабатываете на этом?', 10000);
            appData.income[itemIncome] = cashIncome;
        }

        let addExpenses = prompt('Перечислите возможные расходы через запятую', 'Кино, театр');
        appData.addExpenses = addExpenses.toLowerCase().split(', ');
    },
    getInfoDeposit: function () {
        if (appData.deposit) {
                appData.percentDeposit = prompt('Какой годовой процент?', '10');
                appData.moneyDeposit = prompt( 'Какая сумма заложена?', 10000);
        }
    },
    getExpensesMonth: function () {
        let sum = 0;
        for (let key in appData.expenses) {
           sum += +appData.expenses[key];
        }
        return sum;
    },
    getBudget: function () {
        appData.budgetMonth = appData.budget - appData.getExpensesMonth();
        appData.budgetDay = appData.budgetMonth / 30;
        
    },
    getTargetMonth: function () {
        appData.period = Math.ceil(targetAmount.value / appData.budgetMonth);
        if (appData.period < 0) {
            return ' Цель не будет достигнута';
        }

        return appData.period;
    },
    getStatusIncome: function () {
        if ( appData.budgetDay > 1200 ) {
            return('У вас высокий уровень дохода!');
        } else if( 600 < appData.budgetDay && appData.budgetDay < 1200 ) {
            return(' У вас средний уровень дохода');
        } else if( appData.budgetDay < 600 && 0 < appData.budgetDay ) {
        return(' К сожалению, ваш доход ниже среднего.');
        } else if ( appData.budgetDay < 0 ) {
            return(' Что-то пошло не так, вы тратите больше, чем у вас есть!');
        } else if ( appData.budgetDay === 0 ) {
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

    },
    calcSavedMoney: function () {
        return appData.budgetMonth * appData.period;
    },
    addExpString: function () {
        for (let i = 0; i < appData.addExpenses.length; i++) {
            let gopa = appData.addExpenses[i].toString();
            appData.addExpenses[i] = gopa[0].toUpperCase() + gopa.slice(1);
        }
        return appData.addExpenses.toString();
    }
};

start.addEventListener('click', appData.start);

expensesPlus.addEventListener('click', appData.addExpensesBlock);

appData.getTargetMonth();
appData.getStatusIncome();
appData.getInfoDeposit();
appData.calcSavedMoney();
appData.addExpString();
