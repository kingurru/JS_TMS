/*TODO:task
    Создайте функцию-конструктор houseBuilder, которая позволяет создавать объект дачного дома с параметрами ширины длины и количества этажей.
    Создайте два объекта firstHouse и secondHouse на основании этой функции конструктора.
    (Длина, ширина, количество этажей - числовой тип данных, значения придумайте сами). */

function HouseBuilder(width, length, floor) {
    this.width = width
    this.length = length
    this.floor = floor
    this.info = function () {
        console.log(`width: ${this.width}, length: ${this.length}, floor: ${this.floor}`)
    }
}

let firstHouse = new HouseBuilder(200, 300, 23)
let secondHouse = new HouseBuilder(150, 250, 15)

a100 = firstHouse
mapid = secondHouse

a100.info()
mapid.info()

