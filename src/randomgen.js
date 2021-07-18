import { marketCategories } from "./components/cprmarketdata.js";


const categoryNames = ['Weapons', 'Foods and Drugs', 'Cyberware', 'Electronics', 'Clothes', 'Surival'];

const randInt = (maxExcl, min = 0) => Math.floor(Math.random() * (maxExcl - min)) + min;
export const shuffleArrayCopy = (arr) => [...arr].reduce((acc, x) => Math.random() > 0.5 ? [...acc, x] : [x, ...acc], []);

export const categorySelector = (quantity = 2, minItems) => {
  let randomCats = [];
  let sixCats = [1, 2, 3, 4, 5, 6];
  let randomtemp = [];

  console.log(`raw quantity: ${quantity}, raw minItems: ${minItems}`);

  // if minItems is not a number, default to 2
  minItems = parseInt(minItems) || 2;
  quantity = parseInt(quantity) || 2;

  console.log(`checked quantity: ${quantity}, checked minItems: ${minItems}`);

  //  .. randomCats becomes an array of 6 numbers in random order.
  for (let i = 0; i < quantity; i++) {
    let itemCount = randInt(10, minItems);
    console.log(`minItems: ${minItems}, itemCount: ${itemCount}`);

    let index = sixCats[(Math.floor(Math.random() * sixCats.length))];
    sixCats.splice(sixCats.indexOf(index), 1);
    randomtemp.push(index);

    let randomcat = {
      id: index - 1,
      categoryTitle: categoryNames[index - 1],
      list: shuffleArrayCopy(marketCategories[index - 1]).slice(0, itemCount),
    }
    console.log(`randomcat.list.length: ${randomcat.list.length}`);
    randomCats.push(randomcat);

  }
  return (randomCats);
}

// console.table(categorySelector());
