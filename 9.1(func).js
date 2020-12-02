/*TODO:task
*  - Напишите функцию func() которая при каждом своем вызове будет возвращать количество своих вызовов (сколько раз ее вызызвали до этого плюс этот вызов);
*/

// 1 variant
let func = () => {
    let count = 1
    return () => alert(count++)
}
let counter = func()

counter()


//2 variant
/*
function func() {
    let count = 1
    return function () {
        alert(count++)
    }
}

let counter = func()

counter()*/
