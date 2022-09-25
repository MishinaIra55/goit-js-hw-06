const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];



const element = document.createElement("li");//создаем отдельный элемент li
element.textContent = "Potatoes";//добавляем название как тектовое содержание
element.classList.add('item');//навешиваю класс
// console.log(element);

const secondfood = document.createElement("li");
secondfood.textContent = "Mushrooms";
secondfood.classList.add('item');
// console.log(secondfood);

const thirdfood = document.createElement("li");
thirdfood.textContent = "Garlic";
thirdfood.classList.add('item');
// console.log(thirdfood);

const fourthfood = document.createElement("li");
fourthfood.textContent = "Tomatos";
fourthfood.classList.add('item');
// console.log(fourthfood);

const fivefood = document.createElement("li");
fivefood.textContent = "Herbs";
fivefood.classList.add('item');
// console.log(fivefood);

const lastelement = document.createElement("li");
lastelement.textContent = "Condiments";
lastelement.classList.add('item');
// console.log(lastelement);


const navEl = document.querySelector('#ingredients');//все li вставляю в ul
navEl.append(element, secondfood, thirdfood, fourthfood, fivefood, lastelement);

console.log(navEl);
