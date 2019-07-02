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

}



/*4) Задать пользователю по 2 раза вопросы:

    “Введите обязательную статью расходов в этом месяце”

    “Во сколько обойдется?”

    Записать ответы в объект expenses в формате: 

    expenses: {
    “ответ на первый вопрос” : “ответ на второй вопрос”
    }*/

console.log(appData);


