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

      
const AppData = function () {
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
    this.expensesMonth = 0;
    this.addExpenses = [];
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
    this.mission = 0;
    this.period = 1;
};

AppData.prototype.isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};
AppData.prototype.start = function () {
         
    this.budget = +salaryAmount.value;
    this.getExpInc();
    this.getAddExpenses();
    this.getAddIncome();
    this.getBudget();
    
    this.showResult();
};
AppData.prototype.showResult = function () {
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = this.budgetDay;
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', '); 
    targetMonthValue.value = this.getTargetMonth();
    incomePeriodValue.value = this.calcSavedMoney();
    periodSelect.addEventListener('input', () => {
        incomePeriodValue.value = this.calcSavedMoney();
    });
};
AppData.prototype.addExpensesBlock = function () {
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem,expensesPlus);
    expensesItems = document.querySelectorAll('.expenses-items');
    if (expensesItems.length === 3) {
        expensesPlus.style.display = 'none';
    }
};
AppData.prototype.addIncomeBlock = function () {
    let cloneIncomeItem = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem,incomePlus);
    incomeItems = document.querySelectorAll('.income-items');
    if (incomeItems.length === 3) {
        incomePlus.style.display = 'none';
    }
};
AppData.prototype.getExpInc = function () {
    let ObjectName;
    const count = (item) =>{
        const startStr = item.className.split('-')[0];
        const itemTitle = item.querySelector(`.${startStr}-title`).value;
        const itemAmount = item.querySelector(`.${startStr}-amount`).value;
        if (itemTitle !== '' && itemAmount !== '') {
            this[startStr][itemTitle] = +itemAmount;
        }
        ObjectName = startStr;
    };
    incomeItems.forEach(count);
    expensesItems.forEach(count);
    for (let key in this.expenses) {
        if (ObjectName === 'expenses') {
            this.expensesMonth += +this.expenses[key];
        }
        if (ObjectName === 'income') {
            this.incomeMonth += +this.income[key];
        }
    }
};
AppData.prototype.getAddExpenses = function () {
    let addExpenses = additionalExpensesItem.value.split(', ');
    addExpenses.forEach( (item) => {
        item = item.trim();
        if (item !== '') {
            this.addExpenses.push(item);
        }
    });
};
AppData.prototype.getAddIncome = function () {
    additionalIncomeItem.forEach( (item) => {
        let itemValue = item.value.trim();
        if (itemValue !== '') {
            this.addIncome.push(itemValue);
        }
    });
};
AppData.prototype.getBudget = function () {
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
    this.budgetDay =  Math.floor(this.budgetMonth / 30);
};
AppData.prototype.getTargetMonth = function () {
    this.period = Math.ceil(targetAmount.value / this.budgetMonth);
    console.log(this.period);
    if (this.period <= 0) {
        return  ' Цель не будет достигнута';
    }
    return this.period;
};
AppData.prototype.getPeriodAmount = function () {
    periodAmount.textContent = periodSelect.value;
};
AppData.prototype.calcSavedMoney = function () {
    if (this.budgetMonth < 0) {
        return `Вы ушли в минус на ${0 - this.budgetMonth}`;
    }
    return this.budgetMonth * periodSelect.value;
};
AppData.prototype.reset = function () {
    let allInput = document.querySelectorAll('input');
    allInput.forEach( (item) => {
        item.value = item.defaultValue;
        item.removeAttribute("readonly", "readonly");
    });
    start.style.display = 'block';
    cancel.style.display = 'none';
    this.budgetDay = 0;
    this.budget = 0;
    this.budgetMonth = 0;
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
    this.expensesMonth = 0;
    this.addExpenses = [];
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
    this.mission = 0;
    this.period = 1;
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
    this.getPeriodAmount();
    
};
AppData.prototype.eventListeners = function () {
    start.addEventListener('click', () => {
        if (salaryAmount.value === '') {
            return;
        }
        this.start.bind(this);
        this.start();
        dataInput.forEach( (item, i, array) => {
            item.setAttribute("readonly", "readonly");
        });
        start.style.display = 'none';
        cancel.style.display = 'block';
    });
    cancel.addEventListener('click', () => {this.reset(this);});
    expensesPlus.addEventListener('click', this.addExpensesBlock);
    incomePlus.addEventListener('click', this.addIncomeBlock);
    periodSelect.addEventListener('input', this.getPeriodAmount);
};
/*AppData.prototype.getStatusIncome = function () {
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
};
AppData.prototype.objectIncludes = function () {
    console.log('Наша программа включает в себя данные: ');
    for (let key in this) {
        console.log('Свойство: ' + key + ' Значение: ' + this[key]);
    }
};
AppData.prototype.addExpString = function () {
    for (let i = 0; i < this.addExpenses.length; i++) {
        let str = this.addExpenses[i].toString();
        this.addExpenses[i] = str[0].toUpperCase() + str.slice(1);
    }
    return this.addExpenses.toString();
};*/

const appData = new AppData();
appData.eventListeners();


