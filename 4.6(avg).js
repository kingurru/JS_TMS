/* TODO; task
*   Создайте функцию avg(), которая будет находить среднее значение арифмитическое значение своих аргументов
*/
// 1 variant
function avg() {
    let total
    let sum = 0
    let leng = 0
    for (let i = 0; i < arguments.length; i++) {
        if (!Number.isNaN(arguments[i]) && typeof (arguments[i]) === 'number' && isFinite(arguments[i])) {
            leng++
            sum += arguments[i]
        }
    }
    return total = sum / leng
}

avg(30, 40, 50, '15', 'test', null, NaN, undefined)

// 2 variant
/* function avg (){
    let args = Array.prototype.slice.call(arguments);
    return args.reduce((previous, item) => (previous+item))/args.length;
}
console.log('average: ', avg(10, 2, 1, 3));
 */
