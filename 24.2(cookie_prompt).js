/*todo  Создайте куку с вашем именем и вашим возрастом. При открытии страницы появляется два prompt с просьбой ввести вначале Имя
	  и потом возраст. После чего выведите на экран содержимое этих двух кук. Вывести можно как в прошлом задании только создайте два
	  div.*/
let name = prompt('Your name?')
let age = prompt('Your age?')

document.cookie = encodeURIComponent('name') + '=' + encodeURIComponent(name)

document.cookie = encodeURIComponent('age') + '=' + encodeURIComponent(age)

let cookiesObject = {}

for (let cookie of document.cookie.split("; ")) {
  cookiesObject[cookie.split("=")[0]] = cookie.split("=")[1]
}

let div1 = document.createElement('div')
div1.innerHTML = 'name: ' + cookiesObject.name
document.body.appendChild(div1)

let div2 = document.createElement('div')
div2.innerHTML = 'age: ' + cookiesObject.age
document.body.appendChild(div2)