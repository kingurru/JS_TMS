let a = 2
let b = 3

let c = a
a = b
b = c

console.log(a, b, c)


let arr = [-111, 2, -545454, 10, 453365, 19, 4, -14, 2, 1411]

function findIndexMaxNumber(array) {
  let min_index = 0
  let max_index = 0

  for (let i = 0; i < array.length; i++) {

    if (array[min_index] > array[i]) {
      min_index = i
      console.log('min_index', i,)
    }

    if (array[max_index] < array[i]) {
      max_index = i
      console.log('max_index', i)
    }
  }

  let exchange = array[min_index]
  array[min_index] = array[max_index]
  array[max_index] = exchange

  console.log('min_index:', min_index, 'max_index:', max_index)
  console.log(array)
  return array
}

findIndexMaxNumber(arr)
