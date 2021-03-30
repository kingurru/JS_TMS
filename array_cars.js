/* Дан массив автомобилей:
Полученный в предыдущем задании массив без дубликатов попробуйте отсортировать по убыванию, используя алгоритм быстрой сортировки.*/
let cars = [
  {name: "BMW", model: "528", age: 1983},
  {name: "Subaru", model: "Forester", age: 2002},
  {name: "Mercedes-Benz", model: "W124", age: 1993},
  {name: "Audi", model: "100 C3", age: 1990},
  {name: "BMW", model: "316i", age: 1986},
  {name: "Toyota", model: "Camry", age: 2005},
  {name: "BMW", model: "540", age: 2003},
  {name: "Peugeot", model: "607", age: 2004},
  {name: "Mitsubishi", model: "Lancer", age: 2001},
  {name: "Subaru", model: "Forester", age: 2002},
  {name: "Audi", model: "100 C3", age: 1990},
  {name: "Subaru", model: "Forester", age: 2002},
  {name: "BMW", model: "540", age: 2003},
  {name: "Audi", model: "100 C3", age: 1990}
]

console.log('edit:', cars)


function qSort(arr, key) {
  if (!arr.length) return arr
  else {
    let pivot = arr[Math.floor(arr.length / 2)]
    let less = arr.filter(el => el[key] < pivot[key])
    let other = arr.filter(el => el[key] > pivot[key])

    return [...qSort(less, key), pivot, ...qSort(other, key)]
  }
}
console.log(qSort(cars, 'age'))