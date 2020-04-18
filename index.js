'use strict';

let start = document.getElementById('start'),
    cancel = document.getElementById('cancel'),
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
      incomeItems = document.querySelectorAll('.income-items'),
      additionalExpenses = document.querySelector('.additional_expenses'),
      periodSelect = document.querySelector('.period-select'),
      periodAmount = document.querySelector('.period-amount'),
      additionalExpensesItem = document.querySelector('.additional_expenses-item'),
      targetAmount = document.querySelector('.target-amount'),
      depositAmount = document.querySelector('.deposit-amount'),
      depositPercent = document.querySelector('.deposit-percent'),
      dataInput = document.querySelectorAll('.data input[type = text]');

let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let appData = {
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    income: {},
    incomeMonth: 0,
    addIncome: [],
    expenses: {},
    expensesMonth: 0,
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 0,
    period: 1,
    start: function () {
         
        this.budget = +salaryAmount.value;
        this.getExpenses();
        this.getIncome();
        this.getExpensesMonth();
        this.getAddExpenses();
        this.getAddIncome();
        this.getBudget();
        this.showResult();
    },
    showResult: function () {
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = this.budgetDay;
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', '); 
        targetMonthValue.value = this.getTargetMonth();
        incomePeriodValue.value = this.calcSavedMoney();
        periodSelect.addEventListener('input', () => {
            incomePeriodValue.value = this.calcSavedMoney();});
    },
    addExpensesBlock: function () {
        
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem,expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');
        if (expensesItems.length === 3) {
            expensesPlus.style.display = 'none';
        }
    },
    addIncomeBlock: function () {
        
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem,incomePlus);
        incomeItems = document.querySelectorAll('.income-items');
        if (incomeItems.length === 3) {
            incomePlus.style.display = 'none';
        }
    },
    getExpenses: function () {
        expensesItems.forEach(function (item) {
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if (itemExpenses !== '' && cashExpenses !== '') {
                appData.expenses[itemExpenses] = +cashExpenses;
            }
        });
    },
    getIncome: function () {
        incomeItems.forEach(function (item) {
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
            if (itemIncome !== '' && cashIncome !== '') {
                appData.income[itemIncome] = +cashIncome;
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
    getExpensesMonth: function () {
        for (let key in this.expenses) {
                this.expensesMonth += +this.expenses[key];
        }
    },
    getBudget: function () {
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
        this.budgetDay =  Math.floor(this.budgetMonth / 30);
        
    },
    getTargetMonth: function () {
        this.period = Math.ceil(targetAmount.value / this.budgetMonth);
        if (this.period < 0) {
            return ' Цель не будет достигнута';
        }

        return this.period;
    },
    getPeriodAmount: function () {
        periodAmount.textContent = periodSelect.value;
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
        return this.budgetMonth * periodSelect.value;
    },
    addExpString: function () {
        for (let i = 0; i < this.addExpenses.length; i++) {
            let str = this.addExpenses[i].toString();
            this.addExpenses[i] = str[0].toUpperCase() + str.slice(1);
        }
        return this.addExpenses.toString();
    },
    reset: function () {
        let allInput = document.querySelectorAll('input');
        allInput.forEach( (item) => {
            item.value = item.defaultValue;
            item.removeAttribute("readonly", "readonly");
        });
        start.style.display = 'block';
        cancel.style.display = 'none';
        appData.budget = 0;
        appData.budgetDay = 0;
        appData.budgetMonth = 0;
        appData.income = {};
        appData.incomeMonth = 0;
        appData.addIncome = [];
        appData.expenses = {};
        appData.expensesMonth = 0;
        appData.addExpenses = [];
        appData.deposit = false;
        appData.percentDeposit = 0;
        appData.moneyDeposit = 0;
        appData.mission = 0;
        appData.period = 1;
        incomePlus.style.display = 'block';
        expensesPlus.style.display = 'block';
        let incomeITEMS = document.querySelectorAll('.income-items');
        let expensesITEMS = document.querySelectorAll('.expenses-items');
        for (let i = 1; i < incomeITEMS.length; i++) {
            incomeITEMS[i].remove();
        }
        for (let i = 1; i < expensesITEMS.length; i++) {
            expensesITEMS[i].remove();
        }
        appData.getPeriodAmount();
    }
};

start.addEventListener('click', () => {
    if (salaryAmount.value === '') {
        return;
    }
    appData.start.bind(appData);
    appData.start();
    dataInput.forEach( (item, i, array) => {
        item.setAttribute("readonly", "readonly");
    });
    start.style.display = 'none';
    cancel.style.display = 'block';
});


cancel.addEventListener('click', appData.reset);

expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('input', appData.getPeriodAmount);