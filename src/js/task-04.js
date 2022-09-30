// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.



// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
let counterValue = 0

const Counter = document.querySelector('#value')
const buttonDecrement = document.querySelector('button[data-action="decrement"]')
const buttonIncrement = document.querySelector('button[data-action="increment"]')

buttonDecrement.addEventListener('click', () => { // Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
	counterValue--
	Counter.textContent = counterValue// Обновляй интерфейс новым значением переменной counterValue.
})

buttonIncrement.addEventListener('click', () => {
	counterValue++
	Counter.textContent = counterValue
})