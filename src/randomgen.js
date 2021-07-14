import { marketCategories } from "./components/cprmarketdata.js";


const categoryNames= ['Weapons', 'Foods and Drugs', 'Cyberware', 'Electronics', 'Clothes', 'Surival'];
// pick two categories and print them
// for (let i=0; i< marketCategories.length ; i++){
//  }

const categorySelector = (quantity = 2) => {
    let randomtemp = Math.floor(Math.random() * 6 +1);    
    let randomtemp2 = Math.floor(Math.random() * 6 +1);

    while (randomtemp2 === randomtemp ) {
        randomtemp2 = Math.floor(Math.random() * 6 +1);

    }

    let twolists = [
        {
            category: categoryNames[randomtemp],
            list: marketCategories[randomtemp],    
        },
        {
            category: categoryNames[randomtemp2],
            list: marketCategories[randomtemp2]   
        },
    ]   
    
    return(twolists);
}

console.log(categorySelector());
