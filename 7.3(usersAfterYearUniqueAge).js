/*TODO:task
    На основании массива usersAfterYear, полученного на основании предыдущего задания создать новый массив usersAfterYearUniqueAge, в котором нет пользователей с одинаковым возрастом.
    Если у вас есть два пользователя ({id: 2, name: "Петя", age: 19} и {id: 4, name: "Света", age: 19}, то вы должны оставить только Петю или Свету одного а не их двоих).
    (Это задание похоже на первое задания про массив arr и arrUnique)*/

//todo: 2 task
let users = [
    {id: 1, name: "Вася", age: 19},
    {id: 2, name: "Петя", age: 18},
    {id: 3, name: "Маша", age: 17},
    {id: 4, name: "Света", age: 18},
    {id: 5, name: "Наташа", age: 17},
    {id: 6, name: "Женя", age: 12},
    {id: 7, name: "Коля", age: 30},
    {id: 8, name: "Настя", age: 16},
    {id: 9, name: "Антон", age: 19},
    {id: 10, name: "Иван", age: 20},
    {id: 11, name: "Павел", age: 16},
    {id: 12, name: "Денис", age: 20}
];
let usersAfterYear = users.map(a => ({...a}))
usersAfterYear.map(item => item.age += 1)
usersAfterYear = usersAfterYear.filter(item => item.age >= 18)
// console.log(users)
// console.log(usersAfterYear)

//todo: 3 task
/*let usersAfterYearUniqueAge = usersAfterYear.filter((item, index, arr) =>
    index === arr.findIndex(value =>
    value.age===item.age
    )
)
console.log(usersAfterYearUniqueAge)*/


// todo: task not working
let usersAfterYearUniqueAge = usersAfterYear.reduce((arr, item) => {
        if (arr.indexOf(item.age) === -1) {
            console.log(arr.indexOf(item.age))
            console.log(item.age)
            console.log(item)

            return arr
        }
        return arr
    },
    []
)
console.log(usersAfterYearUniqueAge)
/*console.log(usersAfterYearUniqueAge)
let usersAfterYearUniqueAge = Object.values(
    usersAfterYear.reduce((newArr, item) => {
            newArr[item.age] = item;
            return newArr;
        }, {}
    ));*/

/*
let usersAfterYearUniqueAge = usersAfterYear.reduce((newArr, item) => {
        if ( newArr[item.age] = item) {
            console.log(newArr.indexOf(item.age))
            return newArr
        }
    },
    []
)
console.log(usersAfterYearUniqueAge)*/
