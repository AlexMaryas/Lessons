'use strict';

let expensesItems = document.querySelectorAll('.expenses-items'),
    incomeItems = document.querySelectorAll('.income-items');

const start = document.getElementById('start'),
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
    additionalExpenses = document.querySelector('.additional_expenses'),
    periodSelect = document.querySelector('.period-select'),
    periodAmount = document.querySelector('.period-amount'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    depositAmount = document.querySelector('.deposit-amount'),
    depositPercent = document.querySelector('.deposit-percent'),
    dataInput = document.querySelectorAll('.data input[type = text]');

      
class AppData {
    constructor() {
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
    }
}

AppData.prototype.isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};
AppData.prototype.start = function () {
         
    this.budget = +salaryAmount.value;
    this.getExpInc();
    this.getAddExpInc();
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
    const cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem,expensesPlus);
    expensesItems = document.querySelectorAll('.expenses-items');
    if (expensesItems.length === 3) {
        expensesPlus.style.display = 'none';
    }
};
AppData.prototype.addIncomeBlock = function () {
    const cloneIncomeItem = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem,incomePlus);
    incomeItems = document.querySelectorAll('.income-items');
    if (incomeItems.length === 3) {
        incomePlus.style.display = 'none';
    }
};
AppData.prototype.addExpIncBlock = function (target) {
    const startStr = target.className.split(' ')[1].split('_')[0];
    let items = document.querySelectorAll(`.${startStr}-items`);
    const cloneItem = items[0].cloneNode(true);
    items[0].parentNode.insertBefore(cloneItem,target);
    items = document.querySelectorAll(`.${startStr}-items`);
    if (startStr === 'income') {
        incomeItems = items;
    }
    if (startStr === 'expenses') {
        expensesItems = items;
    }
    if(items.length === 3)  {
        target.style.display = 'none';
    }

};
AppData.prototype.getExpInc = function () {
    const count = (item) =>{
        const startString = item.className.split('-')[0];
        const itemTitle = item.querySelector(`.${startString}-title`).value;
        const itemAmount = item.querySelector(`.${startString}-amount`).value;
        if (itemTitle !== '' && itemAmount !== '') {
            this[startString][itemTitle] = +itemAmount;
        }
    };
    incomeItems.forEach(count);
    for (let key in this.income) {
        this.incomeMonth += +this.income[key];
    }
    expensesItems.forEach(count);
    for (let key in this.expenses) {
            this.expensesMonth += +this.expenses[key];
    }
    
};
AppData.prototype.getAddExpInc = function () {
    const addExpenses = additionalExpensesItem.value.split(', ');
    const count = (item) => {
        let expenses = false;
        if (typeof(item) !== 'string') {
            item = item.value;
            expenses = true;
        }
        item = item.trim();
        if (item === '') {return;}
        if (expenses) {
            this.addIncome.push(item);
        } else {
            this.addExpenses.push(item);
        }

    };
    additionalIncomeItem.forEach(count);
    addExpenses.forEach(count);
};
AppData.prototype.getBudget = function () {
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
    this.budgetDay =  Math.floor(this.budgetMonth / 30);
};
AppData.prototype.getTargetMonth = function () {
    this.period = Math.ceil(targetAmount.value / this.budgetMonth);
    if (this.period < 0 || this.period === 'infinity') {
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
    const allInput = document.querySelectorAll('input');
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
    const incomeITEMS = document.querySelectorAll('.income-items');
    const expensesITEMS = document.querySelectorAll('.expenses-items');
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
    cancel.addEventListener('click', this.reset.bind(this));
    expensesPlus.addEventListener('click', (event) => this.addExpIncBlock(event.target));
    incomePlus.addEventListener('click', (event) => this.addExpIncBlock(event.target));
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
};*/

const appData = new AppData();
appData.eventListeners();


