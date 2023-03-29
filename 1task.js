// Напишите функцию, которая принимает в качестве аргумента объект и выводит в консоль 
// все ключи и значения только собственных свойств. 
// Данная функция не должна возвращать значение.

const parent = {
    city : 'Piter',
    position : 'manager'
}
    
const child = Object.create(parent);
child.ownCity = 'Moscow';
child.ownPosition = 'student';

const ownKeyValue = function (obj){
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) console.log(key, obj[key]);
    }
}

ownKeyValue(child);
