/*TODO:task
    Используя объект Date представьте текущую дату на момент выполения задания в формате DD.MM.YYYYY
    (например 5.12.2020).
    Расширить задание таким образом чтобы если день месяца есть число меньше 10 перед ней ставился "0"
    (например 05.12.2020);*/


let date = () => {
    if ((new Date).getDate() < 10) {
        return `0${(new Date).getDate()}`
    }
}
let today = [date(), (new Date).getMonth(), (new Date).getFullYear()].join('.')
console.log(today)
console.log(date())