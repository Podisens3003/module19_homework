// Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. 
// Реализуйте его на прототипах.
// Определите иерархию электроприборов. Включите некоторые в розетку.
// Посчитайте потребляемую мощность (передайте аргумент). 
// Таких приборов должно быть как минимум два (например, настольная
// лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

// 1 Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
// 2 Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
// 3 У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от 
// родительских методов
// 4 Создайте экземпляры каждого прибора.
// 5 Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :)
 

function ElectricInstrument (name, turnedOn, power) {
    this.name = name,
    this.turnedOn = turnedOn,
    this.powerСonsumption = power,

    this.switchConnection = function() {
        return this.turnedOn = !this.turnedOn;
    }
    this.getСonsumption = function() {
        if (this.turnedOn) {
            console.log(`Текущее потребление ${this.powerСonsumption} W`);
            return this.powerСonsumption;
        }
        else {
            console.log('Устройство выключено');
            return 0;
        }
    }
}

function Lamp(name, turnedOn, power, luminance, warmth) {
    this.name = name,
    this.turnedOn = turnedOn,
    this.powerСonsumption = power,
    this.getLuminance = function(){
        console.log(`${this.luminance} Лк`)
    },
    this.luminance = luminance,
    this.getWarmth = function() {
        console.log(`${this.warmth} K`)
    },
    this.warmth = warmth
}


function WaterWasher(name, turnedOn, power, waterConsumption) {
    this.name = name,
    this.turnedOn = turnedOn,
    this.powerСonsumption = power,
    this.getWaterConsumption = function(){
        console.log(`Потребление воды ${this.waterConsumption} Л`)
    },
    this.waterConsumption = waterConsumption

}


Lamp.prototype = new ElectricInstrument();
WaterWasher.prototype = new ElectricInstrument();

const chandelier = new Lamp('chandelier', false, 60, 2000, 3000);
const deskLamp = new Lamp('deskLamp', false, 20, 1600, 2400);
const washingMachine = new WaterWasher('washingMachine', false, 100, 10);
const dishwasher = new WaterWasher('dishwasher', false, 100, 5);

chandelier.switchConnection();
washingMachine.switchConnection();

console.log(chandelier, deskLamp, washingMachine, dishwasher);