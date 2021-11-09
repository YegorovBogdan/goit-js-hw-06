const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const vegetables = ingredients.map(ingredient => {
  const li = document.createElement("li")
  li.textContent = ingredient;
  li.classList.add("item");
  return li;
});


const ul = document.querySelector("#ingredients");
ul.append(...vegetables);
console.log(ul);


