// 1.1
let age = +prompt('Введите сколько Вам лет?');
if (+age > 0 && + age <= 11) {
    console.log('Вы ребенок');
} else if (age > 11 && age < 18) {
    console.log('Вы подросток');
} else if (age >= 18 && age < 60) {
    console.log('Вы взрослый');
} else if (age >= 60) {
    console.log('Вы пенсионер')
}

//1.2
let number = prompt('Введите число от 0 до 9');
switch (number) {
    case "0":
        console.log(')');
        break;
    case "1":
        console.log('!');
        break;
    case "2":
        console.log('@');
        break;
    case "3":
        console.log('#');
        break;
    case "4":
        console.log('$');
        break;
    case "5":
        console.log('&');
        break;
    case "6":
        console.log('^');
        break;
    case "7":
        console.log('&');
        break;
    case "8":
        console.log('*');
        break;
    case "9":
        console.log("(");
        break;
}

//1.3
let num_first = prompt('Введите начало диапазона');
let num_two = prompt('Введите конец диапазона');
let sum = 0;
while (+num_first <= +num_two) {
    sum += +num_first;
    num_first++;
}
console.log(sum);

//1.4

let Number_One = prompt('Введите число');
let Number_two = prompt('Введите второе число');
if (+Number_One > +Number_two) {
    Number_One = Number_One % Number_two
} else (Number_two = Number_two % Number_One)
console.log(Number_One + Number_two);
// по идеии должно быть условие проверки чисел не являються ли они 0, но код вроде и без этого срабатывает

// 1.5

let n = prompt('Введите число');
for (i = 1; i <= +n; i++) {
    if (+n % i == 0) {
        console.log(i);
    }
}
