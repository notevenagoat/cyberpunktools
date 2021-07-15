import { marketCategories } from "./components/cprmarketdata.js";


const categoryNames = ['Weapons', 'Foods and Drugs', 'Cyberware', 'Electronics', 'Clothes', 'Surival'];

const randInt = (maxExcl, min = 0) => Math.floor(Math.random() * (maxExcl - min)) + min;
const shuffleArrayCopy = (arr) => [...arr].reduce((acc, x) => Math.random() > 0.5 ? [...acc, x] : [x, ...acc], []);

export const categorySelector = (quantity = 2, minItems) => {
  let randomCats = [];
  let sixCats = [1, 2, 3, 4, 5, 6];
  let randomtemp = [];

  //  .. randomCats becomes an array of 6 numbers in random order.
  for (let i = 0; i < quantity; i++) {
    if (isNaN(minItems)) minItems = randInt(10, 2);
    else minItems = randInt(10, minItems);

    let index = sixCats[(Math.floor(Math.random() * sixCats.length))];
    sixCats.splice(sixCats.indexOf(index), 1);
    randomtemp.push(index);

    let randomcat = {
      id: index - 1,
      categoryTitle: categoryNames[index - 1],
      list: shuffleArrayCopy(marketCategories[index - 1]).slice(0, minItems),
    }
    randomCats.push(randomcat);

  }
  return (randomCats);
}

console.table(categorySelector());