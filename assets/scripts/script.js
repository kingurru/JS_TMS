let buttons = document.querySelectorAll('[data-action]')
let list = document.querySelector('.list-container')
buttons[0].disabled = true

for (let i of buttons) {
    i.classList.contains('active')
    console.log(i, i.classList.contains('active'))
    i.onclick = function (event) {
        console.log(event)
        console.log(this)
        if (buttons[0].classList.contains('active')) {
            buttons[0].classList.remove('active')
            buttons[1].classList.add('active');
            buttons[0].disabled = true
            buttons[1].disabled = false
            list.classList.remove('hide');
            list.classList.add('show');
        } else {
            buttons[1].classList.remove('active')
            buttons[0].classList.add('active');
            buttons[1].disabled = true
            buttons[0].disabled = false
            list.classList.remove('show');
            list.classList.add('hide');
        }
    }
}
