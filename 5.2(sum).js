/*TODO: task
    Написать функцию  sum(a, b), которая возвращает сумму переданных ей аргументов. Реализовать с помощью function declaration и с помощью стрелочной функции. !!!Использовать цикл "for in" если это возможно.
*/


/*todo: 1 variant (function declaration)
function sum(a, b) {
    return a + b
}
console.log(sum(4,3))*/

/*todo: 2 variant (function expression)
let sum = function(a, b) {
    let result = a + b;

    return result;
};*/

//todo: 3 variant (стрелка)
//выражение в правой части
//let sum = (a, b) => a + b;

//todo: 4 variant (многострочная стрелка)
//многострочный код в фигурных скобках { ... }, здесь нужен return:
let sum = (a, b) => {
    return a + b;
}