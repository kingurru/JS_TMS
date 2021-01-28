/*todo 21.1
      Задание со звездочкой. Расширьте предыдущее задание так, чтобы можно было осуществить последовательную уборку трех комнат. Для этого создайте цепочку промисов. Только после того как уборка комнаты завершена, пользователь может начать убирать новую.
	  Если одна из комнат оказалась слишком грязной, то пекращаем уборку полностью.
	  Для этого функция cleanRoom(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) { ... } должна принимать три аргемента, каждый из кторых описывает уровень загрязнения каждой комнаты.
 */
// todo var 1
let cleanRooms = function (dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) {
  function cleanRoom(dirtyLevel) {
    if (dirtyLevel > 0) {
      return new Promise(function (resolve, reject) {
        let spentTime = dirtyLevel * 1000
        let maxSpentTime = 10
        if (dirtyLevel > 10) {
          setTimeout(() => reject('Cleaning is incomplete, I\'m tired'),
            1000 * maxSpentTime)
        } else
          setTimeout(() => resolve(spentTime / 1000), spentTime)
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
    .then(result => console.log(`Cleaning completed third room in ${result} seconds`))
    .finally(() => console.log('Time is over'))
}
cleanRooms(2, -33, 111);
