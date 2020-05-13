
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
    console.log('exponentiationTwoSymbols', exponentiation.toString()[0] +
    exponentiation.toString()[1]);

};


console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log(`Период равен ${period} месяцев`);
console.log(`Цель заработать ${mission} рублей`);

console.log('addExpensesLowerCase: ', addExpenses.toLowerCase().split(', '));
console.log('budgetDay: ', budgetDay);


showResult(num);

        
    
    