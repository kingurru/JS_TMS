/*todo
      Создайте куку с именем 'name' и значением 'Иван'. Выведите содержимое этой куки на экран.
	  Например, создайте div в html и при открытии в него будет занаоситься строка в виде "name: Иван"
     */

/* todo преобразование cookie в объект
let cookiesObject = {}

for (let cookie of document.cookie.split("; ")) {
  cookiesObject[cookie.split("=")[0]] = cookie.split("=")[1]
}
console.log(cookiesObject)*/

document.cookie = "name=Иван; path=/; samesite=lax; expires=02 Feb 2222 02:02:02 GMT"

let cookiesObject = {}

for (let cookie of document.cookie.split("; ")) {
  cookiesObject[cookie.split("=")[0]] = cookie.split("=")[1]
}

let div = document.createElement('div')
div.innerHTML = cookiesObject.name
document.body.appendChild(div)
