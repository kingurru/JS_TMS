/*TODO:task
*  - Напишите функцию которая будет увеличивать переменную let i = 0, от 0 до 20, при чем переменная будет увеличивать свое значение на единицу каждые 2 секунды.
*   Когда переменная станет равной 20 прекратить увеличение.
*   Попробуйте реализовать через setInterval и через рекурснивный setTimeout.*/
let counterValue = () => {
    let i = 0
    let timerId = setInterval(() => {
            console.log(i++)
            if (i === 21) {
                clearInterval(timerId)
            }
        }, 2000
    )
}
counterValue()