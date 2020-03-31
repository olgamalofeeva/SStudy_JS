let money = +prompt ('Ваш месячный доход?');
console.log (money);

let income = 'акции';
console.log (typeof income);

let addExpenses = +prompt ('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log (addExpenses);

let deposit = confirm ('Есть ли у вас депозит в банке?');
console.log (deposit);

let mission = 1000000;
console.log ('Цель заработать ' + mission + ' рублей');

let period = 2;
console.log ('Период равен ' + period + ' месяца');

let num = '266219';
console.log((num[0] * num[1] * num[2] * num[3] * num[4] * num[5])**3);

let num2 = '2176782336';
console.log(num2.substring(0,2));

let expenses1 = prompt ('Введите обязательную статью расходов?');
let amount1 = prompt ('Во сколько это обойдется?');
let expenses2 = prompt ('Введите обязательную статью расходов?');
let amount2 = prompt ('Во сколько это обойдется?');

let budgetMonth;
budgetMonth = money - amount1 - amount2;
console.log('budgetMonth: ', budgetMonth);

let goal;
goal = mission/budgetMonth;
console.log(Math.ceil(goal));

let budgetDay;
budgetDay = budgetMonth/ 30;
console.log (Math.floor(budgetDay));

if (budgetDay >= 1200) {
    console.log('У вас высокий уровень дохода');
} else if (budgetDay >= 600) {
    console.log('У вас средний уровень дохода');
} else if (budgetDay > 0) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else {
    console.log('Что то пошло не так');  
}








