/*TODO: task
   Дан массив пользователей. var users = [
 						  {id: 1, name: "Вася", age: 20},
  						  {id: 2, name: "Петя", age: 19},
  						  {id: 3, name: "Маша", age: 18}
						];
	  Добавить в этот маccив еще одного пользователя {id: 4, name: "Дима", age: 17}. Инвертируйте данный массив и выведите возраст пользователя с именем "Петя".*/

let users = [
    {id: 1, name: "Вася", age: 20},
    {id: 2, name: "Петя", age: 19},
    {id: 3, name: "Маша", age: 18}
];
users.reverse(users.splice(users.length, 0, {id: 4, name: "Дима", age: 17}))
let user = users.find(item => item.name === "Петя");
console.log(user.age)
