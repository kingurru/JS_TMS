/*TODO:task
    Создайте класс House, которая позволяет создавать объект здания с параметрами: длины(length), ширины(width) и количество этажей(floors)
    Добавьте ему статический метод sortBuyFloors который можно будет использовать для сортировки зданий по возрастанию их высоты*/

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

let sortArr = houses.sort(House.sortBuyFloors)