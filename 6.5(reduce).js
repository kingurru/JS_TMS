/*TODO: task
    Отсортировать массив arr2 по убыванию.
    Посчитать сумму его эелементов.
    (Попробуйте использовать метод reduce в статье про методы есть его описание).
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

// 5 task (1 variant)
/*
arr2.sort(function (a, b) {
    return b - a
})
let sumArr2 = 0
for (let i in arr2) {
    sumArr2 += arr2[i]
}
console.log('arr2: ' + arr2)
console.log('sumArr2: ' + sumArr2)*/

// 5 task (2 variant)
arr2.sort((a, b) =>  b - a)
let sumArr2 = arr2.reduce((sum, current) => sum + current)
console.log('arr2: ' + arr2)
console.log('sumArr2: ' + sumArr2)