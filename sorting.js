Алгоритмы
поиска
и
сортировки

let mas = [1, 2, 10, 3, 14, 3, 14, 20];

let index = arr.indexOf(14);
console.log(index);


Алгоритма
линейного
поиска

let mas = [1, 2, 10, 3, 14, 3, 14, 20];

function searchLinear(arr, el) {

  let indexEl = -1;

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] === el) {

      return i;

    }

  }

  return indexEl;

}

let index = searchLinear(mas, 3);
console.log(index);


Алгоритмы
бинарного
поиска

let mas = [1, 2, 5, 7, 10, 11, 12, 13, 15, 20];

function searchBinary(arr, el) {

  let start = 0;
  let end = arr.length - 1;
  let middle;
  let indexEl = -1;

  while (start <= end) {

    middle = Math.ceil((start + end) / 2);

    if (el === arr[middle]) {

      indexEl = middle;
      return indexEl;

    } else if (el < arr[middle]) {

      end = middle - 1;

    } else if (el > arr[middle]) {

      start = middle + 1;

    }

  }

  return indexEl;

}


let index_5 = searchBinary(mas, 5);
let index_2 = searchBinary(mas, -2);
let index_20 = searchBinary(mas, 20);
let index_21 = searchBinary(mas, 21);

console.log("index_5 ", index_5);
console.log("index_2 ", index_2);
console.log("index_20 ", index_20);
console.log("index_21 ", index_21);

let mas = [1, 2, 5, 7, 10, 11, 12, 13, 15, 20];
let start = 0;
let end = mas.length - 1;
let count = 0;

function searchBinaryRecursive(arr, el, start, end) {

  let middle;
  let indexEl = -1;

  middle = Math.ceil((start + end) / 2);

  if (start <= end) {

    if (el === arr[middle]) {

      indexEl = middle;
      count += 1;

      return indexEl;

    } else if (el < arr[middle]) {

      end = middle - 1;
      count += 1;

      return searchBinaryRecursive(arr, el, start, end);

    } else if (el > arr[middle]) {

      start = middle + 1;
      count += 1;

      return searchBinaryRecursive(arr, el, start, end);

    }

  } else {

    return indexEl;

  }

}

let index_rec_5 = searchBinaryRecursive(mas, 5, start, end);
let index_rec_2 = searchBinaryRecursive(mas, -2, start, end);
let index_rec_20 = searchBinaryRecursive(mas, 20, start, end);
let index_rec_21 = searchBinaryRecursive(mas, 21, start, end);

console.log("index_5 ", index_5);
console.log("index_2 ", index_2);
console.log("index_20 ", index_20);
console.log("index_21 ", index_21);


// Сортировка выбором

/*
  [1, 10, 5, 4, 14, 4, 14, 20]
0
  [1, 4, 5, 4, 14, 10, 14, 20]
1
  [1, 4, 4, 5, 14, 10, 14, 20]
2
  [1, 4, 4, 5, 14, 10, 14, 20]
3
  [1, 4, 4, 5, 10, 14, 14, 20]
4
  [1, 4, 4, 5, 10, 14, 14, 20]
5
  [1, 4, 4, 5, 10, 14, 14, 20]
6
  [1, 4, 4, 5, 10, 14, 14, 20]
7
*/

let mas = [5, 10, 1, 4, 14, 3, 14, 20]

function sortSelection(arr) {

  let exchange;

  for (let i = 0; i < arr.length; i++) {

    let minIndex = i;


    for (let j = i + 1; j < arr.length; j++) {

      if (arr[j] < arr[minIndex]) {

        minIndex = j;

      }

    }

    if (minIndex !== i) {

      exchange = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = exchange;

    }

    console.log(i + ": ", arr);

  }

  return arr;

}

mas = sortSelection(mas);

console.log("sorted mas ", mas);
