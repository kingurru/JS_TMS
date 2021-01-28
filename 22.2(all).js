/*todo
   - На основанни задачи из прошлого дамашнего задания сделайте так, чтобы можно было осуществить параллельную уборку трех комнат.
	  Только после того как уборка всех комнат завершена, пользователь может заявить об окончании уборки.
	  Если одна из комнат оказалась слишком грязной, то пекращаем уборку полностью. Для этого функция
 	  cleanRooms(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) { ... } должна принимать три аргемента, каждый из кторых описывает
	  уровень загрязнения каждой комнаты.*/


function cleanRoom(dirtyLevel) {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (dirtyLevel <= 10) resolve(dirtyLevel)
      reject("The room is very dirty")
    }, dirtyLevel * 1000)
  })
}

function cleanRooms(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) {
  return Promise.all([cleanRoom(dirtyLevel_1), cleanRoom(dirtyLevel_2), cleanRoom(dirtyLevel_3)])
    .then(() => console.log('Cleaning completed'))
    .catch(err => console.log(err))
}

cleanRooms(2, 11, 1)