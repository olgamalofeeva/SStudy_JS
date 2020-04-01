let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

let money,
income = 'Фриланс',
addExpenses = prompt ('Перечислите возможные расходы за рассчитываемый период через запятую');
deposit = confirm('Есть ли у вас депозит в банке?'),
mission = 1000000,
period = 3;

let start = function() {
    do {
        money = prompt ('Ваш месячный доход?'); 
    }
    while (!isNumber(money));
}
start();

let showTypeof = function(item){
    console.log(typeof item);
};
showTypeof(money);
showTypeof(income);
showTypeof(deposit);

console.log ('Мой месячный доход: ' + money);

console.log ('Мои возможные доходы за месяц: ' + String(addExpenses));

let expenses = [];

const getExpensesMonth = function () {
    let sum = 0;

    for (let i = 0; i < 4; i++) {

        expenses[i]= prompt ('Введите обязательную статью расходов?'); 
       
        do {
            sum += +prompt('Во сколько это обойдется?');
        }
        while (!isNumber(sum));
    }
    console.log(expenses);
    return sum;
};

let expensesAmount = getExpensesMonth();
console.log('Расходы за месяц: ' + expensesAmount);


function getAccumulatedMonth () {
    return money - expensesAmount;
};

let accumulatedMonth = getAccumulatedMonth();
console.log('Мой доход: ' + accumulatedMonth);

console.log ('Цель заработать ' + mission + ' рублей');

const getTargetMonth = mission / accumulatedMonth;

let getStatusMission = function() {
    if (getTargetMonth >= 0) {
        return ('Цель будет достигунта за: ' + Math.ceil(getTargetMonth) + ' месяцев');
    } else {
        return ('Цель не будет достигнута');
    }
};
console.log(getStatusMission());

let budgetDay;
budgetDay = accumulatedMonth/ 30;
console.log ('Бюджет на день:' + ' ' + Math.floor(budgetDay));

let getStatusIncome = function() {
    if (budgetDay >= 1200) {
        return ('У вас высокий уровень дохода');
    } else if (budgetDay >= 600 && budgetDay < 1200) {
        return ('У вас средний уровень дохода');
    } else if (budgetDay > 0 && budgetDay < 600) {
        return ('К сожалению у вас уровень дохода ниже среднего');
    } else {
        return ('Что то пошло не так');  
    }
};
console.log(getStatusIncome());



