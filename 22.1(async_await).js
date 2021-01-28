

/*todo
   Попрубуйте реализовать задачу на цепочку промисов из предудущего домашнего задания через async/await.*/

function cleanRoom(dirtyLevel) {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (dirtyLevel <= 10) resolve(dirtyLevel)
      reject("The room is very dirty")
    }, dirtyLevel * 1000)
  })
}

async function cleanRooms(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) {
  console.log('Start cleaning...')
  try {
    const firstRoom = await cleanRoom(dirtyLevel_1)
    console.log(`Cleaning completed first room in ${firstRoom} seconds`)
    const secondRoom = await cleanRoom(dirtyLevel_2)
    console.log(`Cleaning completed first room in ${secondRoom} seconds`)
    const thirdRoom = await cleanRoom(dirtyLevel_3)
    console.log(`Cleaning completed first room in ${thirdRoom} seconds`)

  } catch(err) {
    console.log(err)

  } finally {
    console.log('End cleaning')
  }
}


cleanRooms(2, 4, 1)
