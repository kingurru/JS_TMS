/*TODO: task
    В образовавшемся массиве arr2 определить положение числа 90 (ее индекс) и удалить ее из массива.
    Вместо 90 добавить в массив числа 19, 2, 91.
*/
// 1 task
let arr = [1, 10, 25, 67, 87, 56]
let leng = arr.push(4)
arr.unshift(arr.pop())

// 2 task
let arr1 = [2, 5, 90, 4]
let arr2 = arr.concat(arr1)
console.log('arr: ' + arr)
console.log('arr1: ' + arr1)
console.log('arr2: ' + arr2)

// 3 task
arr2.splice(arr2.indexOf(90, 0), 1, 19, 2, 91)
console.log('arr2: ' + arr2)