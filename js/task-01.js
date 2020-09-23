


const categoryItems = categories.querySelectorAll('h2');
// console.log (categoryItems);

categoryItems.forEach(element => console.log(element.textContent));


const findItems = categories.querySelectorAll('ul');
// console.log (findItems);

findItems.forEach(element => console.log(
  `Категория: ${categoryItems[element]}
Количество элементов: ${element.children.length}`
));

// for (let i = 0; i < findItems.length; i += 1) {
//   console.log(
//     findItems[i].children.length
//     );

// }
