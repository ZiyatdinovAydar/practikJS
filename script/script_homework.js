"use strict"
let money;

function moneyCorrect() {
    money = +prompt('Ваш месячный доход?');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt('Вы ввели не верное значение, пожалуйста введи еще раз');
    }
}
moneyCorrect()


console.log('----------------');


let profit = 'manager';

console.log('profit:', profit);
console.log('----------------');

let extraMoney;

function extraMoneyCorrect() {
    extraMoney = +prompt('Перечислите возможный доход за ваши дополнительные работы?');

    while (isNaN(extraMoney) || extraMoney == "" || extraMoney == null) {
        extraMoney = +prompt('Вы ввели не верное значение, пожалуйста введи еще раз');
    }
}
extraMoneyCorrect()

let expenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');

console.log('expenses:', expenses)
console.log('line lenght:', expenses.length)
console.log('----------------')

let amount;

function amountCorrect() {
    amount = +prompt('Во сколько обойдуться обязательные статьи расходов?');

    while (isNaN(amount) || amount == "" || amount == null) {
        amount = +prompt('Вы ввели не верное значение, пожалуйста введи еще раз');
    }
}
amountCorrect()



let deposit = confirm('Есть ли у вас вклад в банке?');
if (!deposit)
    console.log('нету');
else {
    console.log('есть депозит');
}
console.log('----------------');



function getAccumulatedIncome(money, extraMoney, amount) {
    return (money + extraMoney) - amount;
}
let result = getAccumulatedIncome(money, extraMoney, amount);

let accumulatedIncome = result
console.log('Ваш бюджет на месяц с учетом ваших расходов составляет:', accumulatedIncome);
console.log(`----------------`)


let purpose = +prompt('Ваша цель заработать?');

function getTargetMonth(purpose, accumulatedIncome) {
    return purpose / accumulatedIncome;

}
let resultMonth = getTargetMonth(purpose, accumulatedIncome);

if (accumulatedIncome <= 0) {
    console.log('resultMonth: ', 0);
    console.log('Цель не будет достигнута');
} else
    console.log('Цель будет достигнута');



console.log(`Ваша цель накопить ${purpose} с учетом всех ваших расходов будет достигнута через ` + Math.round(resultMonth) + ' месяцев');
console.log('----------------');

let budgetDay = accumulatedIncome / 30;

console.log('budgetDay:', Math.floor(budgetDay), 'rub');
console.log('----------------');

if (budgetDay > 6000) {
    console.log('У вас высокий уровень дохода');
} else if (budgetDay <= 6000 && budgetDay >= 3000) {
    console.log('У вас средний уровень дохода');
} else if (budgetDay < 3000 && budgetDay >= 0) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else
    console.log(`Что то пошло не так`);