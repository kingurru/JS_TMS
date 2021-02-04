/*todo - Создайте html документ, в котором подключите script.js. В html файле создайте кнопку (любого вида).
   По нажатию на кнопку отправляйте с помощтю POST запроса на адресс https://jsonplaceholder.typicode.com/posts объект
    {
      title: 'foo',
        body: 'bar',
      userId: 1,
    }
    В случае получения ответа создайте div, в котором будет храниться информация о полученном ответе (поля title и body ответа).
    Оформление div придумайте сами.*/


let obj = {
  title: 'foo',
  body: 'bar',
  userId: 1,
}
let button = document.querySelector('input')

button.addEventListener('click', async (e) => {
  e.preventDefault();

  let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(obj)
  });

  let result = await response.json();
  console.log(result);
  let div = document.createElement('div')
  div.innerHTML = `${result.title}${result.body}`
  document.body.appendChild(div)
})