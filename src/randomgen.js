import { marketCategories } from "./components/cprmarketdata.js";


const categoryNames= ['Weapons', 'Foods and Drugs', 'Cyberware', 'Electronics', 'Clothes', 'Surival'];

let randomCats = [];
let sixCats = [1,2,3,4,5,6];
let randomtemp = [];

export const categorySelector = (quantity = 2) => {
//  .. randomCats becomes an array of 6 numbers in random order.
    for (let i=0; i<categoryNames.length;i++){
        let index = sixCats[(Math.floor(Math.random() * sixCats.length))];
        sixCats.splice(sixCats.indexOf(index), 1);
        randomtemp.push(index);
        
        let randomcat = {
                id: randomtemp[i],
                categoryTitle: categoryNames[randomtemp[i]],
                list: marketCategories[randomtemp[i]],    
            }
        randomCats.push(randomcat);
    
    }
            console.log(randomCats);
    return(randomCats);
}
