/*TODO:task
    Дан объект let user = {
    name: "Ivan",
    age: 19
    };
    Создайте копию объекта использую сериализацию и десериализацию (JSON.stringify(), JSON.parse());*/
let user = {
    name: "Ivan",
    age: 19
};
let newUser = JSON.stringify(user)
console.log(newUser)

console.log(user)

let oldUser = JSON.parse(newUser)
console.log(oldUser)

oldUser == user