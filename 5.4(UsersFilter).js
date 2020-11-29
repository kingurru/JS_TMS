/* TODO: task
*   Задание с прошлых занятий. Создать массив объектов для юзеров [{name: ‘Ivan’, age: 18}, {name: ‘Petr’, age: 12}, {name: ‘Sidor’, age: 25}, {name: ‘Pavel’, age: 24}, {name: ‘Sasha’, age: 29}].
*   Написать скрипт, который будет на выходе отдавать два массива. Первый с совершеннолетними пользователями, второй с несовершеннолетними.
*   !Использовать метод filter. Полученные на выходе два массива отсортировать (каждый из них в отдельности) по старшинству членов (от самого старшего к самому младшему).
*/
//todo: 1 variant
/*let arr = [
    {name: 'Ivan', age: 18,},
    {name: 'Petr', age: 12,},
    {name: 'Sidor', age: 25,},
    {name: 'Pavel', age: 24,},
    {name: 'Sasha', age: 29,},
];
let arrAdults = [];
let arrMinors = [];
for (let i = 0; i < arr.length; i++)
//for (i in arr)
 {
    if (arr[i].age >= 18) {
        arrAdults.push(arr[i])
    } else {
        arrMinors.push(arr[i]);
    }
}
console.log('arrMinors: ', arrMinors);
console.log('arrAdults: ', arrAdults);*/

//todo: 2 variant

let arr = [
    {name: 'Ivan', age: 17,},
    {name: 'Petr', age: 12,},
    {name: 'Sidor', age: 25,},
    {name: 'Pavel', age: 24,},
    {name: 'Sasha', age: 29,},
    {name: 'Pasha', age: 39,},
    {name: 'Masha', age: 21,},

];
adult = arr.filter(person => person.age >= 18)
child = arr.filter(person => person.age < 18)
sortAdult = []
for (let i in adult) {
    sortAdult.push(adult[i].age)
}
sortAdult.sort(function (a, b) {
    return b - a
})
console.log(...sortAdult)