/* TODO: task
*   Напишите функцию hello2(), которая при вызове будет принимать переменную name (например, «Василий») и выводить строку (в нашем случае «Привет, Василий»).
*   В случае отсутствующего аргумента выводить «Привет, гость»
*/

function hello2(name = 'гость!') {
    console.log(`Привет, ${name}!`)
}
hello2('Вася')