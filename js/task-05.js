/*
<input type="text" placeholder="Ваше имя?" id="name-input" />
    <h1>Привет, <span id="name-output">незнакомец</span>!</h1>
    
*/
const inputEl = document.querySelector('#name-input');
console.log(inputEl);

const nameLabel = document.querySelector('#name-output');
console.log(nameLabel.textContent);

  
inputEl.addEventListener(`input`, onInputChange);


  function onInputChange(event) {
    event.currentTarget.value !== '' ?  
    nameLabel.textContent = event.currentTarget.value:
    nameLabel.textContent = 'незнакомец' ;
  }
 

//   function onInputChange(event) {
//     event.currentTarget.value !== 'null' ?  
//     nameLabel.textContent = event.currentTarget.value:
//     nameLabel.textContent = 'незнакомец' ;
//   }
 