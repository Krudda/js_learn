'use strict';

var money = prompt("Ваш бюджет на месяц: ");

var time = prompt("Введите дату в формате YYYY-MM-DD:");

var appData = {
    budjet: money,
    timeData: time,
    expenses: {

    },
    optionalExpenses: {

    },
    income: {

    },

    savings: false,

};

/*4) Задать пользователю по 2 раза вопросы:
    “Введите обязательную статью расходов в этом месяце”
    “Во сколько обойдется?” */

var costs1 = prompt("Введите обязательную статью расходов в этом месяце"),
    count1= prompt("Во сколько обойдется?"),
    costs2 = prompt("Введите обязательную статью расходов в этом месяце"),
    count2 = prompt("Во сколько обойдется?");


/*Записать ответы в объект expenses в формате: 
    expenses: {
    “ответ на первый вопрос” : “ответ на второй вопрос”
    }*/

appData.expenses[costs1] = count1;
appData.expenses[costs2] = count2;


console.log(appData);

/* 5) Вывести на экран пользователя бюджет на 1 день (брать месяц за 30 дней, использовать alert) */

var oneDayBudjet = appData.budjet / 30;

alert("Ваш ежедневный бюджет равен: " + oneDayBudjet + " рублей.");

