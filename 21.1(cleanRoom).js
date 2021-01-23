/*todo
    Напишите функцию уборки комнаты cleanRoom(dirtyLevel) { ... }, которая принимает на вход числовой показатель загрязнения комнаты (от 0 до 10).
    В зависимости от этого числа опеределяется сколько времени надо потратить на уборку, это время равно значению dirtyLevel * 1000 в мс. Данная функция возвращает успешно выполненный промис спустя указанное время dirtyLevel * 1000.
    Для обработки успешной уборки в then используйте console.log(`Уборка проведена успешно за ${result} секунд`); где result это аргумент resolve.*/

let cleanRoom = function (dirtyLevel) {
    let spentTime = dirtyLevel * 1000
    let promise = new Promise(function (resolve) {
        setTimeout(() => resolve(spentTime / 1000), spentTime);
    })
    return promise.then(result => console.log(`Уборка проведена успешно за ${result} секунд`))
}

let firstClean = cleanRoom(5)
console.log(firstClean)