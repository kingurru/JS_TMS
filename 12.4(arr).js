/*TODO:task
*   Оберните firstSkyscraper, secondSkyscraper и thirdSkyscraper в массив skyscrapers и отсортируйте его по возрастанию высоты небоскребов, используя статический метод класса-родителя sortBuyFloors.*/

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
        return this.length * this.width * this.floors
    }

    set fullArea(value) {
        let total = this.length * this.width * this.floors
        if (value <= total) {
            alert('Вы ничего не построили!')
        } else {
            this.floors = Math.round(value / (this.length * this.width))
            alert('Вы построили: ' + this.floors + ' этажей!')
        }
        return this.floors
    }
}

let firstSkyscraper = new Skyscraper(50, 30, 20, 25)
let secondSkyscraper = new Skyscraper(40, 20, 15, 5)
let thirdSkyscraper = new Skyscraper(60, 50, 30, 45)

console.log('1 дом: ' + firstSkyscraper.fullArea + ' квадратов')
console.log('2 дом: ' + secondSkyscraper.fullArea + ' квадратов')
console.log('3 дом: ' + thirdSkyscraper.fullArea + ' квадратов')

firstSkyscraper.fullArea = 1000
firstSkyscraper.fullArea = 30000
firstSkyscraper.fullArea = 4375673456

console.log(firstSkyscraper)

let skyscrapers = [firstSkyscraper, secondSkyscraper, thirdSkyscraper]
let skyscrapersSort = skyscrapers.sort(Skyscraper.sortBuyFloors)