/*TODO: task
*   Задание со звездочкой. Пишем функцию решения квадратного уравнения через дискриминант:
*   ax² + bx + c = 0 (общий вид уравнения)
*   D = b2 – 4ac
*   D > 0
*   x1 = (-b + √D ) / 2a
*   x2 = (-b – √D ) / 2a
*   D = 0
*   x = -b / 2a
*   D < 0 - прекращаем решать уравнение;
*/

function discriminant(a, b, c) {
    let d = Math.pow(b, 2) - (4 * a * c)
    if (d < 0) {
        return alert('d < 0, вещественных корней нет')
    } else if (d > 0) {
        let x1 = (-b + Math.sqrt(d)) / (2 * a)
        let x2 = (-b - Math.sqrt(d)) / (2 * a)
        return [x1, x2]
    } else {
        let x3 = (-b / (2 * a))
        return [x3]
    }
}

discriminant(30, 456, 56)