/* TODO:task Напишите функцию words(n), которая в зависимости от переданного в нее целочисленного аргумента n, будет выводить слово «товар»
*   в нужно форме («12 товаров», но «22 товара»). По умолчанию аргумент n должен иметь значение 0
*/

/*todo: 1 variant to be continued...
function words(n = 0) {
    n = String(n);
    let numberEnd = Number(n[n.length - 1]);
    console.log(typeof (numberEnd));
    console.log(numberEnd);
    if (numberEnd === 1) {
        console.log(`${+n} товар`);
    } else if (numberEnd > 0 && numberEnd <= 4) {
        console.log(`${+n} товара`);
    } else if (numberEnd > 4 && numberEnd <= 9 || numberEnd === 0) {
        console.log(`${+n} товаров`);
    }
}

words();
*/

//todo: 2 variant

let total = null

function words(n = 0) {
    let ost1 = n % 10
    let ost2 = n % 100
    if (ost1 === 1 && ost2 !== 11) {
        total = n + ' товар'
    } else if ((ost1 === 2 && ost2 !== 12) || (ost1 === 3 && ost2 !== 13) || (ost1 === 2 && ost2 !== 12)) {
        total = n + ' товара'
    } else {
        total = n + ' товаров'
    }
    return total
}

words()