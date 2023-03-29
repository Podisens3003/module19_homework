// Перепишите консольное приложение из предыдущего юнита на классы.

class ElectricInstrument {
    constructor (name, turnedOn, power){
        this.name = name;
        this.turnedOn = turnedOn;
        this.powerСonsumption = power;
    }

    switchConnection() {
        return this.turnedOn = !this.turnedOn;
    }
    
    getСonsumption() {
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

class Lamp extends ElectricInstrument {
    constructor(name, turnedOn, power, luminance, warmth){
        super(name);
        this.turnedOn = turnedOn;
        this.powerСonsumption = power;
        this.luminance = luminance;
        this.warmth = warmth;
    }
    getLuminance() {
        console.log(`${this.luminance} Лк`)
    }
    getWarmth() {
        console.log(`${this.warmth} K`)
    }
}

class WaterWasher extends ElectricInstrument {
    constructor(name, turnedOn, power, waterConsumption){
        super(name);
        this.turnedOn = turnedOn;
        this.powerСonsumption = power;
        this.waterConsumption = waterConsumption;
    }
    getWaterConsumption() {
        console.log(`Потребление воды ${this.waterConsumption} Л`)
    }
}

const chandelier = new Lamp('chandelier', false, 60, 2000, 3000);
const deskLamp = new Lamp('deskLamp', false, 20, 1600, 2400);
const washingMachine = new WaterWasher('washingMachine', false, 100, 10);
const dishwasher = new WaterWasher('dishwasher', false, 100, 5);
chandelier.switchConnection();
washingMachine.switchConnection();

console.log(chandelier, deskLamp, washingMachine, dishwasher);
