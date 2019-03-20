
/*
var leftBorderWidth =1;
{
        let second = 2;
    console.log(second);
}


let something;
console.log(something);

let persone = {
    name: "John",
    age: "25",
    isMarried: false
}

console.log(persone.name);
*/

//let answer = prompt("Are you here?", "Da");


//console.log(typeof(answer));

//console.log("arr" + "- object");

var money = prompt("Ваш бюджет на месяц?");
var time = prompt("Введите дату (YYYY-MM-DD)");

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

var exp1 = prompt("Введите статью расходов в этом месяце");
var exp2 = prompt("Во сколько это обойдется?");
var exp3 = prompt("Введите статью расходов в этом месяце");
var exp4 = prompt("Во сколько это обойдется?");

appData.expenses.exp1 = exp2;
appData.expenses.exp3 = exp4;

console.log(appData.budget);
console.log(appData.timeData);

alert(appData.budget / 30);





