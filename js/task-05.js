/*
<input type="text" placeholder="Ваше имя?" id="name-input" />
    <h1>Привет, <span id="name-output">незнакомец</span>!</h1>
    
*/
const formEl = document.querySelector('#name-input');
console.log(formEl);



const refs = {
    input: document.querySelector('.js-input'),
    nameLabel: document.querySelector('.js-button > span'),
    licenseCheckbox: document.querySelector('.js-license'),
    btn: document.querySelector('.js-button'),
  };
  
  // refs.input.addEventListener('focus', onInputFocus);
  // refs.input.addEventListener('blur', onInputBlur);
  // refs.input.addEventListener('change', onInputChange);
  // refs.input.addEventListener('input', onInputChange);
  
  refs.input.addEventListener('input', onInputChange);
  refs.licenseCheckbox.addEventListener('change', onLicenseChange);
  
  function onInputFocus() {
    console.log('Инпут получил фокус - событие focus');
  }
  
  function onInputBlur() {
    console.log('Инпут потерял фокус - событие blur');
  }
  
  function onInputChange(event) {
    refs.nameLabel.textContent = event.currentTarget.value;
  }
  
  function onLicenseChange(event) {
    refs.btn.disabled = !event.currentTarget.checked;
  }