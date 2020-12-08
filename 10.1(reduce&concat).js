/*TODO:task
    - Используйте метод reduce в комбинации с concat для свёртки массива массивов в один массив, у которого есть все элементы входных массивов.
    Например:
    var arrays = [[1, 2, 3], [4, 5], [6]];
    Ваш код тут
    → [1, 2, 3, 4, 5, 6]
    */
// todo 1 vaariant
// let arrays = [[1, 2, 3], [4, 5], [6]];
// let newArr = arrays.reduce((arr, item) => [...arr, ...item])
// console.log(newArr)

// todo 2 variant
let arrays = [[1, 2, 3], [4, 5], [6]];
let newArr = arrays.reduce((arr, item, index) => arr.concat(arrays[index]))
console.log(newArr)
