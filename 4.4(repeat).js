/* TODO: task
*   Создайте функцию repeat(str, n), которая возвращает строку, состоящую из n повторений строки str.
*   n — по умолчанию 2, str — пустая строка
*/

/* todo: 1 variant
function repeat (str = "", n = 2) {
    let arr = [];
    while (arr.length < n) {
        arr.push(str)
    }
    return arr.join("\n")
}
repeat()
*/

/*
// todo: 2 variant

function repeat(str = 'abc', n = 2) {
       return str.repeat(n)
}
repeat()
*/

// todo: 3 variant

function repeat(str = '', n = 2) {
    for (let i = 0; i < n; i++) {
        return str += str
    }
}
repeat()