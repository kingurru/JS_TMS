/*TODO: task
    Дан массив var arr = [1, 10, 25, 67, 87, 56]. Добавить в конец массива число 4. Вывести полученный массив и в переменную leng сохранить его новую длину.
    Из полученного массива извлечь последний элемент. Извлеченный элемент добавить вначало массива.
*/

// let arr = [1, 10, 25, 67, 87, 56]
// let leng = arr.push(4)
// console.log(arr)
// let endEl = arr.pop()
// arr.unshift(endEl)
// console.log(arr)

let arr = [1, 10, 25, 67, 87, 56]
let leng = arr.push(4)
console.log('arr: ' + arr)
arr.unshift(arr.pop())
console.log('arr: ' + arr)