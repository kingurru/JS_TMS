/* todo - Изучить API https://jsonplaceholder.typicode.com/guide/;
       - Отправьте GET на адресс 'https://jsonplaceholder.typicode.com/posts' после чего извлеките только первые 20 записей и отсортируйте их по убыванию длины title. */


let url_1 = 'https://jsonplaceholder.typicode.com/posts'

async function sortTitle(url, count) {
  let arr = await (await fetch(url)).json()
  arr.splice(count)
  arr.sort((a, b) => b.title.length - a.title.length)
  return console.log(arr)
}

sortTitle(url_1, 20)









