import Header from "./uicomponents/Header";
import Footer from "./uicomponents/Footer";
import Navigation from "./uicomponents/NavBar";
import About from "./uicomponents/About";

import Generate from "./components/market/Generate";
import Category from "./components/market/Category";

import "bootstrap/dist/css/bootstrap.min.css";
import { categorySelector } from "./components/randomgen";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import FashionGenerator from "./components/fashion/FashionGenerator";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


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
      <Navigation />
      <Switch>
        <Container>

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

          <Route path="/fashion_generator" component={FashionGenerator} />
          <Route path="/about" component={About} />
        </Container>
      </Switch>
    </Router>
  );
}

export default App;

