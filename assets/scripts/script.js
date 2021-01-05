//todo 1task: получение h1, ul, коллекция элементов li, чётных li нечётных li

let h1 = document.querySelector('h1')
console.log(h1)

let ul = document.querySelector('ul')
console.log(ul)

let li = document.querySelectorAll('li')
console.log(li)

let liEven1 = document.querySelectorAll('li:nth-child(2n)')
console.log(liEven1)
let liEven2 = document.querySelectorAll('li:nth-child(even)')
console.log(liEven2)

let liOdd1 = document.querySelectorAll('ul > li:nth-child(2n-1)')
console.log(liOdd1)
let liOdd2 = document.querySelectorAll('li:nth-child(odd)')
console.log(liOdd2)


//todo 2task: Добавьте для всех четных элементов li красный цвет текста. А для нечетных элементов синий цвет текста (это можно сделать через styles)

for (let item of liOdd1) {
    item.style.color = 'blue'
    console.log(item)
}

for (let item of liEven1) {
    item.style.color = 'red'
    console.log(item)
}

//todo 3task: Задание со звездочкой. Для всех нечетных переключение цвета с красного на синий каждый две секунды(вначале красный через 2 секунды синий, потом через 2 секунды опять красный и т.д.). А для нечентных элементов переключение с синего на красный цвет каждые две секунды(вначале синий 2 секунды через 2 секунды красный, потом через 2 секунды опять синий и т.д.). Для этого использовать setInterval.

for (let item of li) {
    setInterval(() => item.style.color === 'red' ? item.style.color = 'blue' : item.style.color = 'red', 2000)
}
