let money;
money = +prompt ('Ваш месячный доход?')
console.log ('Мой месячный доход:' + ' ' + money);

let expenses1 = prompt ('Введите обязательную статью расходов?');
let amount1 = +prompt ('Во сколько это обойдется?');
let expenses2 = prompt ('Введите обязательную статью расходов?');
let amount2 = +prompt ('Во сколько это обойдется?');

let addExpenses = prompt ('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log ('Мои возможные доходы за месяц:' + ' ' + String(addExpenses));

const getExpensesMonth = function (a, b) {
    return a + b;
};
console.log('Мои обязательные расходы за месяц:' + ' ' + getExpensesMonth(amount1, amount2));


function getAccumulatedMonth (a, b, c) {
    return a - (b + c);
};

let accumulatedMonth = getAccumulatedMonth(money, amount1, amount2);
console.log('Мой доход:' + ' ' + accumulatedMonth);

let mission = 1000000;
console.log ('Цель заработать ' + mission + ' рублей');

const getTargetMonth = function (a, b) {
    return a / b;
};

console.log('Цель будет достигунта за:' + ' ' + Math.ceil(getTargetMonth(mission, accumulatedMonth)) + ' ' + 'месяцев');

let budgetDay;
budgetDay = accumulatedMonth/ 30;
console.log ('Бюджет на день:' + ' ' + Math.floor(budgetDay));

if (budgetDay >= 1200) {
    console.log('У вас высокий уровень дохода');
} else if (budgetDay >= 600 && budgetDay < 1200) {
    console.log('У вас средний уровень дохода');
} else if (budgetDay > 0 && budgetDay < 600) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else {
    console.log('Что то пошло не так');  
}


