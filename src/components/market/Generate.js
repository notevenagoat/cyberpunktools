import React, { useState, useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import TotalPrice from "./TotalPrice";
import Category from "./Category";

const checkNumber = (input, min, max, setter, _default) => {
  if (isNaN(input)) setter(_default);
  else if (input > max) setter(max);
  else if (input < min) setter(min);
  return !(isNaN(input) || input > max || input < min);
};

export default function Generate(props) {
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

    <div>
      <section className="d-flex">
        <div>
          <TotalPrice items={props.items} />
        </div>
        <div className="generate_sets">
          <label for="total_price" variant="success">
            Set Total Price{" "}
          </label>
          <input name="total_price" id="total_price"></input>
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
          <label for="items">Set Min/Max Items</label>
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
        <Category items={props.items} />
      </section>
    </div>
    
  );
}
