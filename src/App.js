import Header from './Header';
import Generate from './Generate';
import Category from './Category';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { categorySelector } from './randomgen';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';

function App() {
  const [items, setItems] = useState([]);

  const getRandom = (number) => {
    return Math.floor((Math.random() * number) +1);
  }

  const categoriesChanged = (nCategories, nItems) => setItems(categorySelector(nCategories, nItems));

  getRandom(100);

  return (
    <Container>
      <Row>
        <Header />
        </Row>
      <Row>
        <Generate paramsChangedFunc={categoriesChanged} items={items} />
        </Row>
      <Row>
      <Category items={items} />
      </Row>
      <Row>
      <Footer />
      </Row>
    </Container>
  );
}

export default App;
