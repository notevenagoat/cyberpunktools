import Header from "./uicomponents/Header";
import Footer from "./uicomponents/Footer";
import Navigation from "./uicomponents/NavBar";
import About from "./uicomponents/About";
import Home from "./uicomponents/Home";
import Contact from "./uicomponents/Contact";

import NightMarket from "./components/market/NightMarket";

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
      <Header />
      <Switch>
        <Container fluid className="main-container">
          <Route
            path="/cyberpunktools/night_market"
            render={(props) => (
              <NightMarket
                {...props}
                paramsChangedFunc={categoriesChanged}
                items={items}
              />
            )}
          />

          <Route
            path="/cyberpunktools/fashion_generator"
            component={FashionGenerator}
          />
          <Route path="/cyberpunktools/about" component={About} />
          <Route path="/cyberpunktools/contact" component={Contact} />
          <Route path="/cyberpunktools/" exact component={Home} />
        </Container>
      </Switch>
    </Router>
  );
}

export default App;
