/*TODO:task
    На основании класса House создайте класс Skyscraper (небоскреб, по сути реализуйте через наследование). Данный класс кроме свойств length, width и floors должен предоставлять дополнительное свойство offices(количество выделенных в офисе задний, можете задать их любым на ваше усмотрение);
	  Добавьте свойство fullArea который будет соответствовать суммарной площади всех этажей вашего небоскреба. Данное свойсвто создать через get/set.
 	  При этом если площадь небоскреба увеличилась - то это значит что сверху построили еще этажи, а длина и ширина не поменялись, площадь может быть только увеличена. Опишите в get как будет осуществляться подсчет площади и вывод этой площадь, а в set определите как будет определяться новое количесвто этажей.
* */
class House {
    constructor(length, width, floors) {
        this.length = length
        this.width = width
        this.floors = floors
    }

    static sortBuyFloors(a, b) {
        return a.floors - b.floors
    }
}

let houses = [
    new House(300, 110, 50),
    new House(400, 50, 10),
    new House(200, 150, 24)
]


class Skyscraper extends House {
    constructor(length, width, floors, offices) {
        super(length, width, floors);
        this.offices = offices;
    }

    get fullArea() {
        let total = this.length * this.width * this.floors
        return total
    }

    set fullArea(value) {
        let total = this.length * this.width * this.floors
        if (value < total) {
            alert('Вы ничего не построили!')
        } else {
            this.floors = value / (this.length * this.width)
            alert('Вы построили: ' + this.floors + ' этажей!')
        }
        return this.floors
    }
}

let a100 = new Skyscraper(100, 200, 7, 5)
a100.fullArea