'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD:");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
};

start();



let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: {},
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i ++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b= prompt("Во сколько обойдется?");
        
            if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
                && a != '' && b != '' && a.length < 50) {
                    appData.expenses[a] = b;
            } else {
                i = i - 1;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budjet / 30).toFixed();
        alert("Ваш ежедневный бюджет равен: " + appData.moneyPerDay + " рублей.")
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Ошибка");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?", ''),
                percent = +prompt("Под какой процент?");
            
            appData.monthIncome = (save / 100 /12 * percent).toFixed(2);
            alert("Доход в месяц с депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function(){
        for (let i = 0; i < 3; i ++) {
            let a = prompt("Статья необязательных расходов?", ''),
                b= prompt("Во сколько обойдется?");
        
            if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
                && a != '' && b != '' && a.length < 50) {
                    appData.optionalExpenses[a] = b;
            } else {
                i = i - 1;
            }
        }
    },
    chooseIncome: function () {
        let items;
        console.log(items);
        while ( items == '' || (typeof(items)) !== "string" ) {
            items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", '');
            console.log(items);
            if ( (typeof(items)) === 'string' && typeof(items) != null && items != '') {
                appData.income = items.split(", ");
             }
        };

        console.log(appData.income.length);

        let dopItems = prompt("Может что то ещё?", '');
        if ( dopItems != null && dopItems != '' && appData.income.length > 0) {
            appData.income.push(dopItems);
        } else if ( appData.income.length == undefined ) {
            //appData.income = dopItems;
            appData.income[0] = dopItems;
        }

        if ( appData.income.length > 1 )
            appData.income.sort();

        console.log(appData.income.length);
        
        if ( appData.income.length != undefined ) {
            console.log("Способы доп.заработка: ");
            appData.income.forEach(function(item, i) {
                console.log( (i+1) + " : " + item);
            }
            )
        }
        // console.log("Способы доп.заработка: ");
        // appData.income.forEach(function(item, i) {
        //     console.log( (i+1) + " : " + item);
        // }
        // )
    }
    
};

appData.chooseIncome();
console.log(appData.income);

console.log("Наша программа включает в себя данные: ")
for ( let prop in appData) {
    console.log(prop + ": " + appData[prop]);
}