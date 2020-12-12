/*TODO:task
   - Данна функция function askArea(result, resolve, reject) {
  				let area = result();
  				if area >= "120") resolve();
  				else reject();
			}
    Добавьте в прототип конструктора houseBuilder метод для проверки того что выполнен план по площади checkAreaSuccessfully, которая выполняет alert("План по стройке выполнен").
    Добавьте также метод для проверки того что не выполнен план по площади checkAreaFail, которая выполняет alert("План по стройке не выполнен выполнен").
    Попробуйте вызвать:
        askArea(firstHouse.calcArea, firstHouse.checkAreaSuccessfully, firstHouse.checkAreaFail)
	    askArea(secondHouse.calcArea, secondHouse.checkAreaSuccessfully, secondHouse.checkAreaFail)
    Будет ли такой код работать корректно? Если нет то используйте известные вам механизмы привязки чтобы решить эту задачу.
*/
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
}

let a100 = new HouseBuilder(3, 4, 15)
let mapid = new HouseBuilder(2, 5, 11)

a100.calcArea()
a100.info()

mapid.calcArea()
mapid.info()

//todo:3task
function askArea(result, resolve, reject) {
    let area = result()
    if (area >= "120") resolve()
    else reject()
}

HouseBuilder.prototype.checkAreaSuccessfully = () => alert("План по стройке выполнен")
HouseBuilder.prototype.checkAreaFail = () => alert("План по стройке не выполнен")

askArea(a100.calcArea.bind(a100), a100.checkAreaSuccessfully.bind(a100), a100.checkAreaFail.bind(a100))
askArea(mapid.calcArea.bind(mapid), mapid.checkAreaSuccessfully.bind(mapid), mapid.checkAreaFail.bind(mapid))