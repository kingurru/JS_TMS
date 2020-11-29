/* TODO: task
    Задание со звездочкой. Создать массив объектов для юзеров [{name: ‘Ivan’, age: 18}, {name: ‘Petr’, age: 12}, {name: ‘Sidor’, age: 25}, {name: ‘Pavel’, age: 24}, {name: ‘Sasha’, age: 29}]
    Написать скрипт, который будет на выходе отдавать два массива. Первый с совершеннолетними пользователями, второй с несовершеннолетними.

 */

let arr = [
    {name: 'Ivan', age: 18},
    {name: 'Petr', age: 12},
    {name: 'Sidor', age: 25},
    {name: 'Pavel', age: 24},
    {name: 'Sasha', age: 29},
]
let arrAdults = []
let arrMinors = []

for (let i = 0; i < arr.length; i++) {
    if (arr[i].age >= 18) {
        arrAdults.push(arr[i])
    } else {
        arrMinors.push(arr[i])
    }
}
console.log('arrMinors: ', arrMinors)
console.log('arrAdults: ', arrAdults)