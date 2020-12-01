/*TODO:task
    Посчитать первые 8 чисел Фибоначчи использую рекурсию. Например: fibonachi(n);
    (При вызове функции положите n = 8);*/

let fibo = n => n <= 1 ? n : fibo(n - 1) + fibo(n - 2)
console.log(fibo(10))
