/*TODO: task
    Расширить предыдущее задание так чтобы из исходного массива удалялись все несовершенолетние пользователи
*/
let arr = [
    {name: 'Ivan', age: 8,},
    {name: 'Petr', age: 12,},
    {name: 'Sidor', age: 25,},
    {name: 'Pavel', age: 24,},
    {name: 'Sasha', age: 29,},
    {name: 'Pasha', age: 45,},
    {name: 'Nikita', age: 16,},
    {name: 'Dimon', age: 18,}


];
for (let i = 0; i < arr.length; i++) {
    if (arr[i].age < 18) {
        arr.splice(i, 1)
        i--
    }
}
killingChildren = arr

