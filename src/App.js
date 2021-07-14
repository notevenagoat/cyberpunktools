import Header from './Header';
import Generate from './Generate';
import Category from './Category';
import Footer from './Footer'
import './App.css';
;

const testItems = [
  { name: 'Cheeseburger', price: 100 },
  { name: 'Fries', price: 50 },
  { name: 'Salad', price: 90 },
  { name: 'Coke', price: 60 },
  { name: 'Bhagyashree\'s Special', price: 120 },
  { name: 'Ivan\'s Special', price: 80 },
  { name: 'Jose\s Special', price: 100 },
];

const testItems1 = [...testItems].reduce((acc, a) => Math.random() > 0.5 ? [...acc, a] : [a, ...acc], []);
const testItems2 = [...testItems].reduce((acc, a) => Math.random() > 0.5 ? [...acc, a] : [a, ...acc], []);

console.table(testItems2);

function App() {

  const getRandom = (number) => {
    return Math.floor((Math.random() * number) +1);
  }
// diceroll(6) --> random category 1 
 /// food
// diceroll(10) per category  = total items avaiable per category
  /// 5 items avaialbe
// diceroll(100) per item = select item from list of 20.. if repeated, roll again.
 /// food item 1, food item 2, food item 3, food item 4, food item 5, ( no repeats)

 // repeat all previous, but for category 2. (cannot be food.)

  getRandom(100);

  return (
    <div>
      <Header />
      <Generate />
      <Category cat1_items={newobject.nameofcat1} cat2_items={testItems2}/>
      <Footer />
    </div>
  );
}

export default App;
