
/*
<input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span>
*/

// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) 
// и изменяет инлайн-стиль span#text обновляя свойство font-size

const inputEl = document.querySelector('input');
  
console.log(inputEl.id);

inputEl.innerHTML = '  min="10" max="30" step="1"';

console.log(inputEl);

const textEl = document.querySelector('#text');
console.log(textEl);

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  console.log(event);
  textEl.style.fontSize = `${event}px`;

}


