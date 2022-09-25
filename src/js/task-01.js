//Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
const categories = document.querySelectorAll('.item');
console.log('');
console.log(`Number of categories: ${categories.length}`);
console.log('');

//Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
categories.forEach(element => {
   const group = [...element.children  ];

   group.forEach(element => {
       if (element.tagName === 'H2') {
           console.log(`Category: ${element.textContent}`);
       }
   });

   group.forEach(element => {
       if (element.tagName === 'UL') {
           console.log(`Elements: ${element.children.length}`);
       }
   });
   console.log(' ');
});