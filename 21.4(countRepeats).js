/* todo 21.4
    - Задача на повторение массивов. Дан массив строк (например ["str", "str1", "str2", "str", "str2", "str", "str3", "str1", "str4", "str4"]).
    Ваша задача написать функцию countRepeats которая будет выводить информацию о том какой элемент в данном массиве сколько раз повторяется.
    Функция должна возвращать объект типа:
    {
      str:  3,
      str1: 2,
      str2: 2,
      str4: 2,
      str3: 1,
    }
    Обратите внимание что информация должна быть отсортирована по убыванию повторений.
*/

let strArr = ["str", "str1", "str2", "str", "str2", "str", "str3", "str1", "str4", "str4"]

function countRepeats(arr) {
  let obj = {};
  arr.forEach(prop => {
    obj[prop]++ || (obj[prop] = 1)
  })
  let sortArr = Object.entries(obj).sort((a, b) => b[1] - a[1])
  let sortObj = {}
  for (let item of sortArr) {
    sortObj[item[0]] = item[1]
  }
  return sortObj
}

countRepeats(strArr)
