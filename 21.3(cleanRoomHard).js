/*todo 21.3
      Задание со звездочкой. Расширьте предыдущее задание так, чтобы можно было осуществить последовательную уборку трех комнат. Для этого создайте цепочку промисов. Только после того как уборка комнаты завершена, пользователь может начать убирать новую.
	  Если одна из комнат оказалась слишком грязной, то пекращаем уборку полностью.
	  Для этого функция cleanRoom(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) { ... } должна принимать три аргемента, каждый из кторых описывает уровень загрязнения каждой комнаты.
 */
// todo var 1
/*let cleanRooms = function (dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) {
  let cleanRoom = function (dirtyLevel) {
    if (dirtyLevel > 0) {

      return new Promise(function (resolve, reject) {

        setTimeout(() => {
          if (dirtyLevel <= 10) resolve(dirtyLevel)
          reject("The room is very dirty")
        }, dirtyLevel * 1000)
      })

    } else {
      dirtyLevel = prompt('Please enter a positive number')
      return cleanRoom(dirtyLevel)
    }
  }

  cleanRoom(dirtyLevel_1)
    .then(result => {
      console.log(`Cleaning completed first room in ${result} seconds`)
      return cleanRoom(dirtyLevel_2)
    })
    .then(result => {
      console.log(`Cleaning completed second room in ${result} seconds`)
      return cleanRoom(dirtyLevel_3)
    })
    .then(result => console.log(`Cleaning completed in ${result} seconds`))
    .catch(err => console.log(err))
    .finally(() => console.log('Time is over'))
}
cleanRooms(2, -33, 111)*/

//todo var2

function cleanRoom(dirtyLevel) {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (dirtyLevel <= 10) resolve(dirtyLevel)
      reject("The room is very dirty")
    }, dirtyLevel * 1000)
  })
}

function cleanRooms(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) {
  cleanRoom(dirtyLevel_1)
    .then(result => {
      console.log(`Cleaning completed first room in ${result} seconds`)
      return cleanRoom(dirtyLevel_2)
    })
    .then(result => {
      console.log(`Cleaning completed second room in ${result} seconds`)
      return cleanRoom(dirtyLevel_3)
    })
    .then(result => console.log(`Cleaning completed in ${result} seconds`))
    .catch(err => console.log(err))
    .finally(() => console.log('Time is over'))
}

cleanRooms(4, 13, 2)

