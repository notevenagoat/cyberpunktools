import React, { useState, useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import TotalPrice from "./TotalPrice";
import MarketTables from "./MarketTables";

const checkNumber = (input, min, max, setter, _default) => {
  if (isNaN(input)) setter(_default);
  else if (input > max) setter(max);
  else if (input < min) setter(min);
  return !(isNaN(input) || input > max || input < min);
};

export default function NightMarket(props) {
  const [nCategories, setNCategories] = useState(2);
  const prevNCategories = useRef();

  const [nItems, setNItems] = useState("");
  const prevNItems = useRef();

  useEffect(() => {
    console.log("useEffect...");
    const nCatsOkay = checkNumber(
      nCategories,
      2,
      6,
      setNCategories,
      prevNCategories.current
    );
    const nItemsOkay = checkNumber(
      nItems,
      1,
      10,
      setNItems,
      prevNItems.current
    );
    if (nCatsOkay && nItemsOkay) {
      console.log(`nCategories: ${nCategories}`);
      props.paramsChangedFunc(nCategories, nItems);
    }
    prevNCategories.current = nCategories;
    prevNItems.current = nItems;
  }, [nCategories, nItems]);

  return (
    <Container>
    <div>
      <h1>Night Market Generator</h1>
      <section className="d-flex generate justify-content-start">
        <div className="generate_sets">
          <label for="categories">Set Categories </label>
          <input
            type="number"
            name="categories"
            id="categories"
            value={nCategories}
            min="2"
            max="6"
            onChange={(e) => setNCategories(e.target.value)}
          ></input>
          <label for="items" className="mt-2">Set Min/Max Items</label>
          <input
            type="number"
            min="1"
            max="10"
            name="items"
            id="items"
            value={nItems}
            onChange={(e) => setNItems(e.target.value)}
          ></input>
        </div>
      </section>
      <section>
        <MarketTables items={props.items} />
      </section>
      <div>
        {/* <Button variant="dark">Generate</Button> */}
        {""}
        <TotalPrice items={props.items} />
      </div>
    </div>
    </Container>
  );
}
