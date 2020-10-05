
const actions = Array.from(document.querySelectorAll('button'));
console.log(actions);
console.log(actions[0].dataset.action);

const numbers = actions;


numbers.forEach(num => console.log(num.dataset.action));

const summ = numbers.reduce((acc, value) => acc + value, 0);

console.log(summ); // 15



// const targetBtn = document.querySelector('.js-target-btn');
// const addListenerBtn = document.querySelector('.js-add-listener');
// const removeListenerBtn = document.querySelector('.js-remove-listener');

let counterValue = 0;


addListenerBtn.addEventListener('click', event => {
  console.log(event);
  console.log('Вешаю слушателя события на целевую кнопку');

  targetBtn.addEventListener('click', onTargetBtnClick);
});

// removeListenerBtn.addEventListener('click', event => {
//   console.log(event);
//   console.log('Снимаю слушателя события с целевой кнопки');

//   targetBtn.removeEventListener('click', onTargetBtnClick);
// });

// function onTargetBtnClick(event) {
//   console.log(event);
//   console.log('Клик по целевой кнопке');
// }
