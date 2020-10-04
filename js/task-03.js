const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const fullGallery = document.querySelector('#gallery');
console.log(fullGallery);
const cardGallery = createImageEl(images);

fullGallery.insertAdjacentHTML('beforeend', cardGallery);

function createImageEl (images) {
  const imageEl = images.map(({url, alt}) => {
    return `<li class="image">
      <a href=""><img src="${url}" alt="${alt}" width="240">
    </li>`;
  }).join('');
  return imageEl;
}

console.log(cardGallery);



// const gallery = document.querySelector('#gallery');


// const imgEl = images.map(image => {
//   imageEl = document.createElement('img');
//   imageEl.classList.add('image');
//   imageEl.src = image.url;
//   imageEl.alt = image.alt;
//   imageEl.width = 320;
// console.log(image);
// });


// console.log(imageEl);

// // list.insertAdjacentHTML('afterbegin', '<li>${imgEl}</li>');
// const ulEl = document.querySelector('ul');
// ulEl.append(...imgEl);

///////

// const productsContainerEl = document.querySelector('gallery');

// const makeProductCard = ({ url, alt }) => {
//   const productEl = document.createElement('img');
//   productEl.classList.add('image');

//   const linkEl = document.createElement('img');
//   linkEl.src = url;
//   linkEl.alt = alt;
 

//   productEl.append(linkEl);

//   return productEl;
// };

// const elements = products.map(makeProductCard);

// console.log(elements);
// productsContainerEl.append(...elements);