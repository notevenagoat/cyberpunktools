import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'react-bootstrap';


const checkNumber = (input, min, max, setter, _default) => {
  if (isNaN(input)) setter(_default);
  else if (input > max) setter(max);
  else if (input < min) setter(min);
  return !(isNaN(input) || (input > max) || (input < min));
}


export default function Generate(props) {
  const [nCategories, setNCategories] = useState(2);
  const prevNCategories = useRef();

  useEffect(() => {
    {
      if (checkNumber(nCategories, 2, 6, setNCategories, prevNCategories.current)) {
        console.log(`nCategories: ${nCategories}`);
        props.paramsChangedFunc(nCategories, nItems);
      }
    }
    prevNCategories.current = nCategories;
  }, [nCategories]);

  const [nItems, setNItems] = useState(null);
  const prevNItems = useRef();

  useEffect(() => {
    if (checkNumber(nItems, 1, 10, setNItems, prevNItems.current)) {
      props.paramsChangedFunc(nCategories, nItems);
    }
    prevNItems.current = nItems;
  }, [nItems]);

  return (
    <section className="generate">
      <div>
        <Button variant="info">Generate</Button>
      </div>
      <div className="generate_sets">
        <label for="total_price" variant="success">Set Total Price </label>
        <input name="total_price" id="total_price"></input>
        <label for="categories">Set Categories </label>
        <input name="categories" id="categories" value={nCategories} onChange={evt => setNCategories(evt.target.value)}></input>
        <label for="items">Set Min/Max Items</label>
        <input name="items" id="items" value={nItems} onChange={evt => setNItems(evt.target.value)}></input>
      </div>
    </section>
  )
}