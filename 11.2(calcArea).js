/*TODO:task
   Создайте метод calcArea который будет возвращать суммарную площадь всех этажей дома.
   Данный метод занести в прототип конструктора.
   Вызвать данный метод на каждом созданном объекте и результат записать в поле totalArea каждого объекта.*/

function HouseBuilder(width, length, floor) {
    this.width = width
    this.length = length
    this.floor = floor
    this.info = function () {
        console.log(`width: ${this.width}, length: ${this.length}, floor: ${this.floor}`)
    }
}

HouseBuilder.prototype.calcArea = function () {
    return  `${this.width * this.length * this.floor}`

}

let a100 = new HouseBuilder(300, 400, 15)
let mapid = new HouseBuilder(200, 250, 11)

a100.totalArea = +a100.calcArea()
mapid.totalArea = +mapid.calcArea()

console.log(a100, mapid)



