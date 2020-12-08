/*TODO:task
    Используя объект Date представьте текущую дату на момент выполения задания в формате DD.MM.YYYYY
    (например 5.12.2020).
    Расширить задание таким образом чтобы если день месяца есть число меньше 10 перед ней ставился "0"
    (например 05.12.2020);*/


let today = () => {
    if ((new Date).getDate() < 10) {
        return `0${(new Date).getDate()}`
    }
}
let today1 = [(new Date).getDate(), (new Date).getMonth(), (new Date).getFullYear()].join('.')
let today2 = [today(), (new Date).getMonth(), (new Date).getFullYear()].join('.')
let today3 = (new Date).getDate().toString().length === 2 ? today1 : "0" + today1
console.log(today1)
console.log(today2)
console.log(today3)
console.log(today())

