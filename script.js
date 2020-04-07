let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

let money,
    start = function() {
        do {
            money = prompt ('Ваш месячный доход?'); 
        }
        while (!isNumber(money));
    }
start();

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 500000,
    period: 3,
    asking: function() {

        if(confirm('Есть ли у вас дополнительный заработок?')) {
            
            do {
                itemIncome = prompt('Какой у вас дополнительный заработок?');
            }
            while (isNumber(itemIncome));

            cashIncome = 0;
            do {
                cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?');
            }
            while (!isNumber(cashIncome));
            
            appData.income[itemIncome] = +cashIncome;
        }
        console.log(appData.income);

        let addExpenses = prompt ('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses = addExpenses.toLowerCase().split(' , ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');

        for (let i = 0; i < appData.addExpenses.length; i++) {
            console.log(appData.addExpenses[i].charAt(0).toUpperCase() + appData.addExpenses[i].substr(1));
        };
            
        let sum = 0;
    
        for (let i = 0; i < 3; i++) {
            var addCosts = prompt ('Введите обязательную статью расходов?');
            
        do {
            sum = prompt('Во сколько это обойдется?');
            }
        while (!isNumber(sum));
        appData.expenses[addCosts] = +sum;
    }
        console.log(appData.expenses);
    },
    expensesMonth: function () {
        let summed = 0;
            for (let key in appData.expenses) {
            summed += appData.expenses[key];
    }
            return (summed);
    },
    budget: money,
    budgetDay: function() {
        return appData.budgetMonth()/30;
    },
    budgetMonth: function() {
        return (money - appData.expensesMonth());  
    },
    targetMonth: function() {
        return appData.mission / appData.budgetMonth();
    },
    statusMission: function() {
        if (appData.targetMonth() >= 0) {
            return ('Цель будет достигунта за: ' + Math.ceil(appData.targetMonth()) + ' месяцев');
    } else {
            return ('Цель не будет достигнута');
    }
},
    statusIncome: function() {
        if (appData.budgetDay() >= 1200) {
            return ('У вас высокий уровень дохода');
    } else if (appData.budgetDay() >= 600 && appData.budgetDay() < 1200) {
            return ('У вас средний уровень дохода');
    } else if (appData.budgetDay() > 0 && appData.budgetDay() < 600) {
            return ('К сожалению у вас уровень дохода ниже среднего');
    } else {
            return ('Что то пошло не так');  
    }
},
getInfoDeposit: function() {
    if(appData.deposit){
        do {
            appData.percentDeposit = prompt('Какой годовой процент?');
            }
        while (!isNumber(appData.percentDeposit));

        do {
            appData.moneyDeposit = prompt('Какая сумма заложена?');
            }
        while (!isNumber(appData.moneyDeposit));
    }
},
calcSavedMoney: function() {
    return appData.budgetMonth() * appData.period;
}
}

appData.asking();
appData.expensesMonth();
appData.budgetMonth();
appData.budgetDay();
appData.targetMonth();
appData.statusMission();
appData.statusIncome();
appData.getInfoDeposit();


console.log('Расходы за месяц: ' + appData.expensesMonth());
console.log(appData.statusMission());
console.log(appData.statusIncome());

for (let key in appData) {
        console.log('Наша программа включает в себя данные: ' + key + ' значение:' + appData[key]);
        }
        