/*let name = Ivan;
let lastname = Ocheretnyi;
let age = 30;


// let 2name; let my-name; примеры не правильных имен переменных

var city;
const Year = 2000;

/* let let; let %age; 
еще один вариант не верных названий и способы коментирования в JS  
*/


let userName = prompt('Как тебя зовут?');
let bornyear = prompt('В каком году ты родился?');
const currentYear = 2022;
let side = prompt('Чему равна сторона квадрата');
let userAge = currentYear - bornyear;
let perimetr = side * 4;


console.log('Привет', userName)
console.log('Тебе уже -', userAge)
console.log('Периметр квадрата =', perimetr)

// Радиус окружности
const Pnumber = 3.14;
let radius = prompt('Какой радиус окружности?');
let area = Pnumber * Math.pow(radius, 2);

console.log('Площадь круга =', area);

// Скорость 
let distance = prompt('Каково растояние между городами?');
let time = prompt('За сколько времени можно преодолеть это растояние?');
let speed = distance / time;

console.log('Тебе нужно двигаться со скоростью -', speed, 'км/ч');

// Конвертор

const course = 0.87;
let dollar = prompt('Сколько доларов ты хочешь поменять?');
let euro = dollar * course;

console.log('У тебя получиться', euro, 'евро');
