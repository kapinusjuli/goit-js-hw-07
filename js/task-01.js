

const categoryItems = Array.from(
  categories.querySelectorAll('.item'));

categoryItems.map(function (cat) {
    console.log(
    `Категория: ${cat.querySelector('h2').textContent}
  Количество элементов: ${cat.querySelectorAll('li').length}`
  )
});
