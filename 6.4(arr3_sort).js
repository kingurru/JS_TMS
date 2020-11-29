/*TODO: task
    В измененном массиве arr2 извлечь последние 4 элемента с конца и записать их в массив arr3.
    Сам массив arr2 не должен измениться (извлеченные из него эелементы должны в нем остаться).
    Массив arr3 отсортировать по возрастанию.
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

// 4 task
let arr3 = arr2.slice(-4)
arr3.sort(function (a, b) {
    return a - b
})
console.log('arr3: ' + arr3)