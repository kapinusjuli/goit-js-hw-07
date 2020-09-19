

const categoryItems = categories.querySelectorAll('h2');
//console.log(categoryItems);
//console.log(categoryItems.length);


for (let i = 0; i < categoryItems.length; i += 1) {
   
    console.log(categoryItems[i].textContent);

//     let countCategory = categoryItems[i].childNodes;
//   console.log(countCategory);

//     countCategory = categories[i].children;
// console.log(countCategory[i].length);

  }
  //   for (let i = 0; i < countCategory.length; i += 1) {
//     console.log(countCategory[i].textContent);

//   }



let countCategory = categories.querySelectorAll('ul');
console.log(countCategory.firstChild);



