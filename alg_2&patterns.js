/*Дан массив чисел: let arr = [1, 2, -20, 4, 5, 7, 8, 10, 6, 3]. Отсортировать данный массив методом сортировки выбором (желательно использовать рекурсию).
Следующим шагом будет в отсортированном массиве используя наиболее эффективный алгоритм в этом случае найти индекс числа 5. После чего узнав индекс пятерки поменять ее местами с последним элементом. По сути надо написать две функции: функцию сортировки, функцию поиска. Замену местами можно сделать без функций.



let arr1 = [1, 2, -20, 4, 5, 7, -800, 10, 6, 3]

/*function sortSelectionRec(arr) {
  if (!arr.length) return

  let idxOfMinVal = function(array) {
    return array.reduce((minIdx, val, i) => val > arr[minIdx] ? minIdx : i, 0)
  }
  let minVal = arr.splice(idxOfMinVal(arr), 1)

  return [minVal, sortSelectionRec(arr)].flat()
}
let res1 = sortSelectionRec(arr1)
console.log(res1)*/


function sortSelection(arr) {
  let exchange
  let minIdx

  for (let i = 0; i < arr.length; i++) {
    minIdx = i

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j
      }
    }

    if (minIdx !== i) {
      exchange = arr[i]
      arr[i] = arr[minIdx]
      arr[minIdx] = exchange
    }
  }
  return arr
}

let arr2 = [1, 2, -20, 4, 5, 7, -800, 10, 6, 3]
let res2 = sortSelection(arr2)
// console.log(res2)


// [-800, -20, 1, 2, 3, 4, 5, 6, 7, 10]


function searchBinaryRecursive(arr, el, start = 0, end = arr.length - 1, middle) {

  middle = Math.ceil((start + end) / 2)

  if (start <= end) {
    if (el === arr[middle]) {
      return middle

    } else if (el < arr[middle]) {
      end = middle - 1
      return searchBinaryRecursive(arr, el, start, end)

    } else if (el > arr[middle]) {
      start = middle + 1
      return searchBinaryRecursive(arr, el, start, end)
    }
  }
  return -1
}

let resIdx = searchBinaryRecursive(res2, 10)
console.log(resIdx)


let exchange = res2[resIdx]
res2[resIdx] = res2[res2.length - 1]
res2[res2.length - 1] = exchange

console.log(res2)