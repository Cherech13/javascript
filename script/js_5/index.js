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
    speed: 100,
    volume: 40,
    consumption: 8,
    drivers: ["Ivan", "Ros", "Bob"],

    info: function () {
        alert('Это автомобиль' + ' ' + this.manufacturer + ' ' + this.model + ' ' + this.year + ' ' + 'года выпуска' + ' ' + 'средний расход' + ' ' + this.consumption + 'литров' + ' ' + 'на 100 км');
    }
};

//1.2
let car_driver = prompt('Назовите водителя который может управлять автомобилем');
function check(car_driver) {
    if (car_driver === Car.drivers) {
        alert("Этот человек может управлять этим автомобилем");
    }
        else {
            alert("Этот человек не может управлять этим автомобилем");
        }
    }
// Я попытался сделать водителей в объекте через массив, но тогда моя функция говорит что никто не может управлять автомобилем! Поэтому вышел из ситуации таким путем!!! Ну это наверное не совсем правильно но типо работает!!

//1.3 
let s = +prompt('enter how many kilometers you want to drive?');
let Fuel = s / 100 * Car.consumption;
let gas = Fuel - Car.volume
function refuel() {
    if (Fuel < Car.volume) {
        console.log("Cool,you have enough gas");
    }
    else {
        console.log('you have enough gasoline for 500 km, you need to refuel', gas, "liters");
    }      
}

//1.4
function timing(s, car_driver) {
    let time = s / Car.speed;
    if (time > 4) {
        console.log("time to cover the distance", time + Math.floor(time / 4), "hours");
    }
    else {
        console.log ("time to cover the distance", time, "hours");
    }
    refuel(s);
    check(car_driver);
} 
// по отдельности мои функции работают, но если в function timing() вызывать функции которые обявлены выще, то не работает!