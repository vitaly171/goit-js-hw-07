//Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
//после чего вставит все li за одну операцию в список ul.ingredients.
//Для создания DOM - узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const contentEl = document.querySelector('#ingredients');
const ingredient = ingredients.map(ingredient => {
  const ingredientName = document.createElement('li');
  ingredientName.textContent = ingredient;
  return ingredientName;
}
)
contentEl.append(...ingredient);
