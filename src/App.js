import Header from "./Header";
import Generate from "./Generate";
import Category from "./Category";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { categorySelector } from "./randomgen";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import FashionGenerator from "./fashion/FashionGenerator";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/NavBar";
import About from "./components/About";

function App() {
  const [items, setItems] = useState([]);

  const getRandom = (number) => {
    return Math.floor(Math.random() * number + 1);
  };

  const categoriesChanged = (nCategories, nItems) =>
    setItems(categorySelector(nCategories, nItems));

  getRandom(100);

  return (
    <Router>
      <Header />
      <Switch>
        <Row>
          <Route
            path="/night_market"
            render={(props) => (
              <Generate
                {...props}
                paramsChangedFunc={categoriesChanged}
                items={items}
              />
            )}
          />
          <Route path="/" exact component={home} />
          <Route path="/fashion_generator" component={FashionGenerator} />
          <Route path="/about" component={About} />
        </Row>
      </Switch>
    </Router>
  );
}

export default App;

const home = () => {
  return (
    <div>
      <Container>
        <h1>HOME PAGE</h1>
      </Container>
    </div>
  );
};
