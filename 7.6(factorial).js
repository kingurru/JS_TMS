/* TODO:task
Посчитать с помощью рекурсии факториал числа 10. Например: factorial(n); (При выозове полжите n = 10);*/

let fact = n => n <= 1 ? 1 : n * fact(n-1)
console.log(fact(2))
