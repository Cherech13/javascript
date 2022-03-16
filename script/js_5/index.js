//1
//const car = {
   // manufacturer: "Citroen",
   // model: "C-eelyse",
   // year: 2019,
   // speed: 70,
   // volume: 40,
   // consumption: 8,
    //driver: "Ivan"
//};

//1.1 
const Car = {
    manufacturer: 'Citroen',
    model: 'C-eelyse',
    year: 2019,
    speed: 70,
    volume: 40,
    consumption: 8,
    driver_one: "Ivan",
    driver_two: "Ros",
    driver_three: "Bob",

    info: function () {
        alert('Это автомобиль' + ' ' + this.manufacturer + ' ' + this.model + ' ' + this.year + ' ' + 'года выпуска' + ' ' + 'средний расход' + ' ' + this.consumption + 'литров' + ' ' + 'на 100 км');
    }
};

//1.2
let car_driver = prompt('Назовите водителя который может управлять автомобилем');
function check(car_driver) {
    if (car_driver === Car.driver_one) {
        alert("Этот человек может управлять этим автомобилем");
    }
    if (car_driver === Car.driver_two) {
        alert("Этот человек может управлять этим автомобилем");
    }
    if (car_driver === Car.driver_three) {
        alert("Этот человек может управлять этим автомобилем");
    }
        else {
            alert("Этот человек не может управлять этим автомобилем");
        }
    }
// Я попытался сделать водителей в объекте через массив, но тогда моя функция говорит что никто не может управлять автомобилем! Поэтому вышел из ситуации таким путем!!! Ну это наверное не совсем правильно но типо работает!!


//