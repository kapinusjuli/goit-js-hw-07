
/*
<input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span>
*/

// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) 
// и изменяет инлайн-стиль span#text обновляя свойство font-size

const inputEl = document.querySelector('input');
  
console.log(inputEl.id);

inputEl.innerHTML = '  min="10" max="30" value="20" step="1"';

console.log(inputEl);

console.log(inputEl.value);

const textEl = document.querySelector('#text');
console.log(textEl);

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    textEl.style.fontSize = `${inputEl.value}px`;

}

// // Не понимаю, правильно ли поняла, но дебаггер ниже нашла по ссылке:
// // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/debugger

// function potentiallyBuggyCode() {
//   debugger;
  
//   // чтобы протестировать работу отладчика, поместите здесь код, заведомо содержащий ошибку

  
// function onInputChange(event) {
//   console.log(event);
//   textEl.style.fontSize = `${event}px`;

// }

// }


