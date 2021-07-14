import React, {useState, useEffect} from 'react';
import { Button } from 'react-bootstrap';


export default function Generate(props) {
  const [nCategories, setNCategories] = useState(2);

  useEffect(()=> {
    if (isNaN(nCategories)) setNCategories(2);
    else if (nCategories > 6) setNCategories(6);
    else if (nCategories < 1) setNCategories(1);
    else {
      console.log(`nCategories: ${nCategories}`);
      props.catChangedFunc(nCategories);
    }
  }, [nCategories]);


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
                <input name="items" id="items"></input>
  </div>
    </section>
    )
}