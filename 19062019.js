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

console.log(appData);
/*Создать объект appData, который будет содержать такие данные:

·      бюджет (передаем сюда переменную из п.2)

·      данные времени - timeData (передаем сюда переменную из п.2)

·      объект с обязательными расходами - expenses (смотри пункт 4)

·      объект с необязательными расходами - optionalExpenses (оставляем пока пустым)

·      массив данных с доп. доходом - income (оставляем пока пустым)

·      свойство savings (выставляем его как false) */

