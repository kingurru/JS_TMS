/*TODO: task
*  Создайте функцию-конструктор, которая позволяет создавать объект пользователя с полями first_name, second_name, age, city.
	  С помощью данной функции создайте два объекта пользователей (два пользователя), имя, фамилию, возраст, город проживания задайте сами.*/

function Users(first_name, second_name, age, city) {
    this.first_name = first_name
    this.second_name = second_name
    this.age = age
    this.city = city
}

let user1 = new Users("Mikita", "Makarov", 33, "Kiev")
let user2 = new Users("Vlad", "Vilich", 44, "Moscow")

console.log(user1)
console.log(user2)