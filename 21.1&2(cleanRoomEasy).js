/*todo 21.1
   - Напишите функцию уборки комнаты cleanRoom(dirtyLevel) { ... }, которая принимает на вход числовой показатель загрязнения комнаты (от 0 до 10).
    В зависимости от этого числа опеределяется сколько времени надо потратить на уборку, это время равно значению dirtyLevel * 1000 в мс. Данная функция возвращает успешно выполненный промис спустя указанное время dirtyLevel * 1000. Для обработки успешной уборки в then используйте console.log(`Уборка проведена успешно за ${result} секунд`); где result это аргумент resolve.
   - Расширьте предыдущее задание так, чтобы при передаче в dirtyLevel > 10 вы спустя dirtyLevel * 1000 мс возвращали выполненный с ошибкой промис. Для обработки неуспешной уборки в then используйте console.log(err).
    Где err это аргумент reject. Текст ошибки придумайте сами.
 */
//todo var1

let cleanRoom = function (dirtyLevel) {
  if (dirtyLevel > 0) {

    return new Promise(function (resolve, reject) {

      setTimeout(() => {
        if (dirtyLevel <= 10) resolve(dirtyLevel)
        reject("The room is very dirty")
      }, dirtyLevel * 1000)
    })
      .then(result => console.log(`Cleaning completed in ${result} seconds`))
      .catch(err => console.log(err))

  } else {
    dirtyLevel = prompt('Please enter a positive number')
    return cleanRoom(dirtyLevel)
  }
}

cleanRoom(5)

//todo var2
/*

function cleanRoom(dirtyLevel) {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (dirtyLevel <= 10) resolve(dirtyLevel)
      reject("The room is very dirty")
    }, dirtyLevel * 1000)
  })
}

cleanRoom(10)
  .then(result => console.log(`Cleaning completed in ${result} seconds`))
  .catch(err => console.log(err))
  .finally(() => console.log('Time is over'))*/
