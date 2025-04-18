/**
 * Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д.
 * значення змінної value. Використовуй методи Math.floor(), Math.ceil()
 * та Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9.
 */

// const value = 27.3;

// console.log(Math.floor(value));
// console.log(Math.ceil(value));
// console.log(Math.round(value));







/**
 * Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс
 * маси тіла людини. Для цього необхідно розділити вагу на
 * квадрат висоти.
 *
 * Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть
 * бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової
 * частини може бути кома.
 *
 * Індекс маси тіла необхідно округлити до однієї цифри після коми.
 */

function calcBMI(weight, height) {
    let numWeight = weight.replace(",", ".");
    numWeight = Number.parseFloat(numWeight);
    const numHeight = Number.parseFloat(height);
    
    const bmi = numWeight / (numHeight ** 2);

    return bmi.toFixed(1);
}

const bmi = calcBMI("88,3", "1.75");
console.log(bmi);







