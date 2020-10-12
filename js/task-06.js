
/*
#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}
*/


/*
<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символов"
/>
    
*/

const inputEl = document.querySelector('input');
  
console.log(inputEl.placeholder);
inputEl.classList.add('validation-input');


inputEl.addEventListener('input', onInputChange);

const countSimb = Number(inputEl.dataset.length);
console.log(countSimb);

function onInputChange(event) {
if (event.currentTarget.value.length !== countSimb) {
inputEl.classList.add('invalid')} else {
inputEl.classList.add('valid')
inputEl.classList.remove('invalid')
};
    
  console.log(event.currentTarget.value.length);

  
  // return resultForCss;

}


