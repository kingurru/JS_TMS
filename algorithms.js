let a = 2
let b = 3

let c = a
a = b
b = c

console.log(a, b, c)


let arr = [-111, 2, 4, 10, 5, 19, 4, -14, 2, 1411]

function findIndexMaxNumber(array) {
  let min_index = -1
  let max_index = -1
  let min = +Infinity
  let max = -Infinity

  for (let i = 0; i < array.length; i++) {

    if (array[i] < min) {
      min = array[i]
      min_index = i
      console.log('min_index', i,)
    }

    if (array[i] > max) {
      max = array[i]
      max_index = i
      console.log('max_index', i)
    }
  }

  let exchange = array[min_index]
  array[min_index] = array[max_index]
  array[max_index] = exchange

  console.log(min_index, max_index)
  console.log(array)
  return array
}

findIndexMaxNumber(arr)
