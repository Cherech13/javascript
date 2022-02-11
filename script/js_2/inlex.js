//1.1
const d = 0.1 + 0.2;
console.log(+d.toFixed(2));

//1.2
let num_one = '1';
let num_two = 5;
console.log(+num_one + num_two);

//1.3
let flashMemory = prompt('Какой объём памяти у флешки?');
const file = 820;
let amount = flashMemory * 1000 / file;
console.log(Math.floor(amount));

//2.1
let chockolate = prompt('Сколько стоит плитка шоколада?');
let money = prompt('Сколько у тебя денег?');
let buy = +money / +chockolate;
console.log('Ты сможешь купить', Math.floor(buy), 'плиток шоколада');
console.log('У тебя еще останеться', +money % +chockolate, '$');

//2.2
let number = prompt('Введите трехзначное число');
let number_one = Math.floor(number / 100);
let number_two = parseInt((+number / 10) % 10);
let number_three = +number % 10;
console.log(`${number_three}${number_two}${number_one}`);

// 3.1
let vklad = prompt('Какую сумму вы хотите положить на депозит?');
const interest = 5;
const year = 365;
const day_twomonth = 121;
console.log('Вы получити за два месяца', ((vklad * interest * (day_twomonth / year)) / 100).toFixed(2));

// 3.2
// 2 && 0 && 3 - віведит 0

 // 2 || 0 || 3 - віведит 2

// 2 && 0 || 3 - віведит 3



