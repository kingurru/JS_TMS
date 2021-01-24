/*todo 21.1
   - Напишите функцию уборки комнаты cleanRoom(dirtyLevel) { ... }, которая принимает на вход числовой показатель загрязнения комнаты (от 0 до 10).
    В зависимости от этого числа опеределяется сколько времени надо потратить на уборку, это время равно значению dirtyLevel * 1000 в мс. Данная функция возвращает успешно выполненный промис спустя указанное время dirtyLevel * 1000. Для обработки успешной уборки в then используйте console.log(`Уборка проведена успешно за ${result} секунд`); где result это аргумент resolve.
   - Расширьте предыдущее задание так, чтобы при передаче в dirtyLevel > 10 вы спустя dirtyLevel * 1000 мс возвращали выполненный с ошибкой промис. Для обработки неуспешной уборки в then используйте console.log(err).
    Где err это аргумент reject. Текст ошибки придумайте сами.
    - Задание со звездочкой. Расширьте предыдущее задание так, чтобы можно было осуществить последовательную уборку трех комнат. Для этого создайте цепочку промисов.
    Только после того как уборка комнаты завершена, пользователь может начать убирать новую.
    Если одна из комнат оказалась слишком грязной, то пекращаем уборку полностью.
    Для этого функция cleanRoom(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) { ... } должна принимать три аргумента, каждый из которых описывает уровень загрязнения каждой комнаты.
 */

let cleanRoom = function (dirtyLevel) {
    if (dirtyLevel > 0) {
        let spentTime = dirtyLevel * 1000
        return new Promise(function (resolve, reject) {
            if (dirtyLevel > 10) {
                setTimeout(() => reject('Cleaning is incomplete, I\'m tired'), spentTime)
            } else setTimeout(() => resolve(spentTime / 1000), spentTime);
        })
            .finally(() => console.log('Time is over'))
            .then(
                result => console.log(`Cleaning completed in ${result} seconds`),
                err => console.log(err))
    } else {
        dirtyLevel = prompt('Please enter a positive number')
        cleanRoom(dirtyLevel)
    }
}

let firstClean = cleanRoom(13)
