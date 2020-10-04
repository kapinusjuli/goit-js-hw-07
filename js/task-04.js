let counterValue = 0;

const targetBtn = document.querySelector('button');
console.log(targetBtn);


// const addListenerBtn = document.querySelector('.js-add-listener');
// const removeListenerBtn = document.querySelector('.js-remove-listener');

targetBtn.addEventListener('click', event => {
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