/*TODO: task
*    Создайте функцию rgb(a, b, c), которая будет принимать три числовых аргумента и возвращать строку вида «rgb(23,100,134)».
*    Если аргументы не заданы, считать их равными нулю. Не проверять переменные на тип данных.
*/

//todo: 1 variant
/*
    function rgb() {
    let a = prompt("Enter a")
    let b = prompt("Enter b")
    let c = prompt("Enter c")
    alert(`rgb(${a},${b},${c})`)
}
*/

//todo: 2 variant
function rgb(a = 0, b = 0, c = 0) {
    return`rgb(${a},${b},${c})`
}
