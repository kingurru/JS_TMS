/*TODO:task
      Дан объект let user = { name: "Ivan", years: 19, car: "Subaru", telePhone: "iPhone", city: "Minsk" }.
	  Запишите поле name в переменную userYears, поле year в переменную userName,
	  поле car в переменную userCar, остальные поля записать в объект userOtherInfo;*/
let user = {name: "Ivan", years: 19, car: "Subaru", telePhone: "iPhone", city: "Minsk"}
let {name:  userName, years: userYears, car: userCar, ...userOtherInfo} = user

console.log(`${userName}, ${userYears}, ${userCar}, ${userOtherInfo.telePhone}, ${userOtherInfo.city}`)