const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];




 images.forEach(el => {
  const innerImg = document.querySelector('.gallery');
  innerImg.insertAdjacentHTML('beforeend', `<li><img src= '${el.url}' alt= '${el.alt}' class='item'></li>`);
  
 });



// const makeImgCat = elements => {
//   return elements.map(element => {

//     const navEl = document.createElement('li');

//     const imgCat = document.createElement('img');
//     imgCat.src = element.url;
//     imgCat.alt = element.alt;
//     imgCat.classList.add('item');

    

//     return imgCat;

    
//   });
// };


// const makeImages = document.querySelector('.gallery');

// const elements = makeImgCat(images);
// makeImages.append(...elements);


// const imgCat = document.createElement('img');
// imgCat.src = 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
// imgCat.alt = 'White and Black Long Fur Cat';
// console.log(imgCat);




// const imgFish = document.createElement('img');
// imgFish.src = 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
// imgFish.alt = 'Orange and White Koi Fish Near Yellow Koi Fish';
// console.log(imgFish);




// const imgHorses = document.createElement('img');
// imgHorses.src =  'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
// imgHorses.alt = 'Group of Horses Running';
// console.log(imgHorses);

// const galerryEl = document.querySelector('ul');
// galerryEl.append(imgCat, imgFish, imgHorses);