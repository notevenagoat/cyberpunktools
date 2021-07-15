import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'react-bootstrap';
import TotalPrice from './TotalPrice';


const checkNumber = (input, min, max, setter, _default) => {
  if (isNaN(input)) setter(_default);
  else if (input > max) setter(max);
  else if (input < min) setter(min);
  return !(isNaN(input) || (input > max) || (input < min));
}


export default function Generate(props) {
  const [nCategories, setNCategories] = useState(2);
  const prevNCategories = useRef();

  const [nItems, setNItems] = useState('');
  const prevNItems = useRef();

  useEffect(() => {
    console.log('useEffect...');
    if (checkNumber(nCategories, 2, 6, setNCategories, prevNCategories.current)) {
      console.log(`nCategories: ${nCategories}`);
      props.paramsChangedFunc(nCategories, nItems);
    }
    prevNCategories.current = nCategories;
    prevNItems.current = nItems;
  }, [nCategories, nItems]);

  return (
    <section className="generate">
      <div>
        <Button variant="info">Generate</Button>
        <TotalPrice items={props.items} />
      </div>
      <div className="generate_sets">
        <label for="total_price" variant="success">Set Total Price </label>
        <input name="total_price" id="total_price"></input>
        <label for="categories">Set Categories </label>
        <input name="categories" id="categories" value={nCategories} onChange={e => setNCategories(e.target.value)}></input>
        <label for="items">Set Min/Max Items</label>
        <input name="items" id="items" value={nItems} onChange={e => setNItems(e.target.value)}></input>
      </div>
    </section>
  )
}