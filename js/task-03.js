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


console.log(images[0].url);


const paletteContainer = document.querySelector('gallery');
const cardsMarkup = createColorCardsMarkup(images);

paletteContainer.insertAdjacentHTML('beforeend', html);

paletteContainer.addEventListener('click', onPaletteContainerClick);

function createColorCardsMarkup(images) {
  return images
    .map(({ url, alt }) => {
      return `
    <div class="color-card">
     <div><div><div> <div
     class="color-swatch"
     data-hex="${url}"
     data-rgb="${alt}"
     style="background-color: ${url}"
   ></div></div></div></div>
      <div class="color-meta">
        <p>HEX: ${url}</p>
        <p>RGB: ${alt}</p>
      </div>
    </div>
    `;
    })
    .join('');
}

function onPaletteContainerClick(evt) {
  const isColorSwatchEl = evt.target.classList.contains('color-swatch');

  if (!isColorSwatchEl) {
    return;
  }

  const swatchEl = evt.target;
  const parentColorCard = swatchEl.closest('.color-card');

  removeActiveCardClass();
  addActiveCardClass(parentColorCard);
  setBodyBgColor(swatchEl.dataset.hex);
}

function setBodyBgColor(color) {
  document.body.style.backgroundColor = color;
}

function removeActiveCardClass() {
  const currentActiveCard = document.querySelector('.color-card.is-active');

  if (currentActiveCard) {
    currentActiveCard.classList.remove('is-active');
  }
}

function addActiveCardClass(card) {
  card.classList.add('is-active');
}

// const gallery = document.querySelector('#gallery');


// const imgEl = images.map(image => {
//   image = document.createElement('img');
//   image.classList.add('image');
//   image.src = images.url;
//   image.alt = images.alt;
//   image.width = 320;
// console.log(image);
// });


// console.log(imgEl);

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
