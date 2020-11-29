/*TODO:task
   В массиве users посчитайте общий суммарный возраст всех пользователей.
*/

let users = [
    {id: 1, name: "Вася", age: 20},
    {id: 2, name: "Петя", age: 19},
    {id: 3, name: "Маша", age: 18}
];
users.reverse(users.splice(users.length, 0, {id: 4, name: "Дима", age: 17}))
let user = users.find(item => item.name === "Петя");
let sum = 0
users.forEach(item => sum += item.age)
console.log(sum)
