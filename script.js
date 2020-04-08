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

        do{
            addExpenses = prompt ('Перечислите возможные расходы за рассчитываемый период через запятую');
        }
        while (isNumber(addExpenses));

        appData.addExpenses = addExpenses.toLowerCase().split(' , ');
        
        for (let i = 0; i < appData.addExpenses.length; i++) {
            console.log(appData.addExpenses[i].charAt(0).toUpperCase() + appData.addExpenses[i].substr(1));
        };
            
        appData.deposit = confirm('Есть ли у вас депозит в банке?');

        let sum = 0;
    
        for (let i = 0; i < 3; i++) {
            do {
                var addCosts = prompt ('Введите обязательную статью расходов?');
            }
            while (isNumber(addCosts));
            
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

const calculateCosts = document.getElementById('start');
console.log(calculateCosts);

const pressButton1 = document.getElementsByTagName('button')[0];
console.log(pressButton1);

const pressButton2 = document.getElementsByTagName('button')[1];
console.log(pressButton2);

const checkBox = document.querySelector('#deposit-check');
console.log(checkBox);

const inputIncome = document.querySelectorAll('.additional_income-item');
console.log(inputIncome);

const elementsValue1 = document.querySelector('.budget_day-value');
console.log(elementsValue1);

const elementsValue2 = document.querySelector('.expenses_month-value');
console.log(elementsValue2);

const elementsValue3 = document.querySelector('.additional_income-value');
console.log(elementsValue3);

const elementsValue4 = document.querySelector('.additional_expenses-value');
console.log(elementsValue4);

const elementsValue5 = document.querySelector('.income_period-value');
console.log(elementsValue5);

const elementsValue6 = document.querySelector('.target_month-value');
console.log(elementsValue6);

const inputValue1 = document.querySelector('.budget_month-value');
console.log(inputValue1);

const inputValue2 = document.querySelector('.period-select');
console.log(inputValue2);

const inputValue3 = document.querySelector('.salary-amount');
console.log(inputValue3);

const inputValue4 = document.querySelector('.income-title');
console.log(inputValue4);

const inputValue5 = document.querySelector('.income-amount');
console.log(inputValue5);

const inputValue6 = document.querySelector('.additional_income-item');
console.log(inputValue6);

const inputValue7 = document.querySelectorAll('.additional_income-item');
console.log(inputValue7);

const inputValue8 = document.querySelector('.expenses-title');
console.log(inputValue8);

const inputValue9 = document.querySelector('.expenses-amount');
console.log(inputValue9);

const inputValue10 = document.querySelector('.additional_expenses-item');
console.log(inputValue10);

const inputValue11 = document.querySelector('#deposit-check');
console.log(inputValue11);

const inputValue12 = document.querySelector('.deposit-amount');
console.log(inputValue12);

const inputValue13 = document.querySelector('.deposit-percent');
console.log(inputValue13);

const inputValue14 = document.querySelector('.target-amount');
console.log(inputValue14);