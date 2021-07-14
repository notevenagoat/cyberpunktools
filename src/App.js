import Header from './Header';
import Generate from './Generate';
import Category from './Category';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { categorySelector } from './randomgen';
import { useState, useEffect } from 'react';

function App() {
  const [items, setItems] = useState(categorySelector(1));

  const getRandom = (number) => {
    return Math.floor((Math.random() * number) +1);
  }

  const categoriesChanged = nCategories => {
    setItems(categorySelector(nCategories));
  }

  getRandom(100);

  return (
    <div>
      <Header />
      <Generate catChangedFunc={categoriesChanged} />
      <Category items={items} />
      <Footer />
    </div>
  );
}

export default App;
