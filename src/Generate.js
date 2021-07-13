import React from 'react';


export default function Generate() {
    return (
        <section className="generate">
            <div>
                <button>Generate</button>
            </div>
            <div className="generate_sets">
                <label for="total_price">Set Total Price </label>
                <input name="total_price" id="total_price"></input>
                <label for="categories">Set Categories </label>
                <input name="total_price" id="categories"></input>
                <label for="items">Set Min/Max Items</label>
                <input name="items" id="items"></input>
  </div>
    </section>
    )
}