// Напишите функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет, 
// есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

const parent = {
    city : 'Piter',
    position : 'manager'
}
    
const child = Object.create(parent);
child.ownCity = 'Moscow';
child.ownPosition = 'student';

const check = function (str, obj) {
    console.log(str in obj);
}

check('ownCity', child);
check('str', child);