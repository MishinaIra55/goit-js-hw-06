// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const InputFontSize = document.querySelector('#font-size-control');
const Textspan = document.querySelector('#text');

InputFontSize.addEventListener('input', (event) => {
   Textspan.style.fontSize = event.currentTarget.value + 'px';
});

