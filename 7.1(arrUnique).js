/*TODO:task
    Дан массив var arr = [1, 2, 3, 4, 4, 5, 2, 9, 4]; На основании этого массива создать новый массив arrUnique который будет представлять собой массив arr но без дублирующихся
    по своим значениям элементам. Использовать методы reduce и indexOf.*/

let arr = [1, 2, 3, 4, 4, 5, 2, 9, 4];
let arrUnique = arr.reduce((newArr, item) => {
        if (newArr.indexOf(item) === -1) {
            newArr.push(item)
            return newArr
        } else {
            return newArr
        }
    },
    []
)
