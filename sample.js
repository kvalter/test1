
let money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату (YYYY-MM-DD)");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};


// Cycle #1 with WHILE
// let i = 0;
// while (i < 2) {
//     let a = prompt("Введите статью расходов в этом месяце", '');
//         b = prompt("Во сколько это обойдется?", ''); 
// if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
//         && a != '' && b != '' && a.length < 50) {
//         console.log("done");
//     appData.expenses[a] = b;
// } 
// i++;
// } 

//Cycle #2 with DO
// let i = 0;
// do {
//     let a = prompt("Please input your monthly expenses", '');
//         b = prompt("How much it will cost?", '');
// if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
//     && a != '' && b != '' && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//     }
//     i++;
//     }
// while (i < 2);

// Cycle #3 with FOR
for (let i = 0; i < 2; i++) {
    let a = prompt("Введите статью расходов в этом месяце", '');
        b = prompt("Во сколько это обойдется?", ''); 
    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
            && a != '' && b != '' && a.length < 50) {
            console.log("done");
        appData.expenses[a] = b;
    } else {

    }
    
};

appData.moneyPerDay = appData.budget / 30;

console.log(appData.budget);
console.log(appData.timeData);

alert("Daily budget: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Minimum level")
} else if  (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Avarege level");
} else if (appData.moneyPerDay > 2000) {
    console.log("High level");
} else {
    console.log("Mistake")
}




