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
  return (
    <div>
      <Header />
      <Generate />
      <Category cat1_items={testItems1} cat2_items={testItems2}/>
      <Footer />
    </div>
  );
}

export default App;
