/*TODO: task
   Дан массив var arr1 = [2, 5, 90, 4]. Обьеденить данный массив с массивом из предыдущего задания (с учетом тех изменений, которые вы с ним уже произвели в том задании )
   и записать результат в переменную arr2. Сами массивы arr и arr1 должны остаться неизмененными.
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