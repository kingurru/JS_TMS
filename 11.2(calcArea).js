/*TODO:task
   Создайте метод calcArea который будет возвращать суммарную площадь всех этажей дома.
   Данный метод занести в прототип конструктора.
   Вызвать данный метод на каждом созданном объекте и результат записать в поле totalArea каждого объекта.*/

function HouseBuilder(width, length, floor) {
    this.width = width
    this.length = length
    this.floor = floor
    this.info = function () {
        console.log(`width: ${this.width}, length: ${this.length}, floor: ${this.floor}, area: ${this.totalArea}`)
    }
}

HouseBuilder.prototype.calcArea = function () {
    this.totalArea = this.width * this.length * this.floor
    return this.totalArea
    // return  this.width * this.length * this.floor
}

let a100 = new HouseBuilder(3, 4, 15)
let mapid = new HouseBuilder(2, 5, 11)

// a100.totalArea = a100.calcArea()
// mapid.totalArea = mapid.calcArea()

a100.calcArea()
a100.info()

mapid.calcArea()
mapid.info()

