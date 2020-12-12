/*TODO: task- Создайте функцию, которая позовляет вывести полную информацию о каждом из двух пользователей созданных в предыдущем задании.
	  Функция должна выполнять вывод информации и не принимать аргументов. По сути нужно одну функцию привязать два объекта.*/

function Users(first_name, second_name, age, city) {
    this.first_name = first_name
    this.second_name = second_name
    this.age = age
    this.city = city
    this.info = function () {
        console.log(`${this.first_name} ${this.second_name}, ${this.age}, ${this.city}`)
    }

}

let user1 = new Users("Mikita", "Makarov", 33, "Kiev")
let user2 = new Users("Vlad", "Vilich", 44, "Moscow")

user1.info()
user2.info()