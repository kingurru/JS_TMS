/*TODO:task
    Дан объект var users = {
    first_name: "pavel",
    second_name: "ivanov",
    father_name: "ivanovich",
    city: "minsk",
    car: "subaru",
    telephone: "samsung"
    }
    Необходимо сделать так чтобы все значения полей объекта users начинались с заглавной буквы (например не "pavel" a "Pavel").
    Для решения этой задачи рекомендую использовать методы Object.keys или Object.values и методы строк как UpperCase.*/

var users = {
    first_name: "pavel",
    second_name: "ivanov",
    father_name: "ivanovich",
    city: "minsk",
    car: "subaru",
    telephone: "samsung"
}

let names = Object.values(users)
console.log(names)
let newNames = names.map(item => item[0].toUpperCase() + item.slice(1))
console.log(newNames)
