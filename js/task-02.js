const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

let addLi = [];

console.log(ingredients);

const allLi = ingredients.map(ingredient => {
  addLi = document.createElement('li');
  // addLi.classList.add('ingredient');
  addLi.textContent = ingredient;
return addLi;
});

console.log(allLi);

const ulEl = document.querySelector('ul');
ulEl.append(...allLi);
