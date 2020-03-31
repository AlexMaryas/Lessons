let money = 100,
    income = 'Казино',
    addExpenses = 'интернет, такси, коммуналка',
    deposit = true,
    mission = 500000,
    period = 12,
    budgetDay = money/30;
    
    const commit = document.querySelector('.new_commit')
    console.log('commit: ', commit);
    
    alert(money);
    
    console.log(typeof money);
    console.log(typeof income);
    console.log(typeof deposit);
    console.log(addExpenses.length);
    console.log(`Период равен ${period} месяцев`);
    console.log(`Цель заработать ${mission} рублей`);
    
    console.log('addExpenses.toLowerCase().split(', '): ', addExpenses.toLowerCase().split(', '));
    console.log('budgetDay: ', budgetDay);
    
    