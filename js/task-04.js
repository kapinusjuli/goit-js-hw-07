
const actionMinus = document.querySelector('.decrement');
console.log(actionMinus);


const actionPlus = document.querySelector('.increment');
console.log(actionPlus);


let startValue = document.querySelector('#value');
let counterValue = Number (startValue.textContent);
console.log(counterValue);

const addListenerBtnMinus = actionMinus.addEventListener('click', () => {
  counterValue -=1;
  startValue.textContent = counterValue;

});



const addListenerBtnPlus = actionPlus.addEventListener('click', () => {
  counterValue +=1;
  startValue.textContent = counterValue;

});
