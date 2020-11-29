/* TODO: task
*    Напишите функцию mul(n,m), которая принимает два аргумента и возвращает произведение этих аргументов. Проверьте ее работу.
*/
function mul(a, b) {
    if (Number.isFinite(a) && Number.isFinite(b)
        && typeof (a) === 'number' && typeof (b) === 'number'
        && !Number.isNaN(a) && !Number.isNaN(b)) {
        return a * b
    } else {
        console.log("Функция работает только с числовым типом данных")
    }
}

mul(40, 50)