// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.


 const createButton = document.querySelector('[data-create]');
 createButton.addEventListener('click', () => {
   let value = document.querySelector('input').value;
   createBoxes(Number(value));
 });

 const removeButton = document.querySelector('[data-destroy]');
 removeButton.addEventListener('click', () => {
   document.querySelector('#boxes').innerHTML = '';
   document.querySelector('input').value = '';
 })


function createBoxes(amount) {
   let param = 30;
   for(let i = 1; i <= amount; i += 1){
      let div = document.createElement('div');
      let boxes = document.querySelector('#boxes');
      div.style.width = param + 'px';
      div.style.height = param + 'px';
      div.style.backgroundColor = getRandomHexColor();
      param += 10;
      boxes.append(div);
   }
}

function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215)
     .toString(16)
     .padStart(6, 0)}`;
 }
