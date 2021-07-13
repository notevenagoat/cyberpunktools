
import React from 'react';

export default function Category(props) {
    return (
    <div className="table_div">
            <div className="first_cate">
                <h4>Category 1</h4>
            <table >
              {props.items.map(item => <MarketItem name={item.name} price={item.price} />)}
            </table>
        </div>
        <div className="second_cate">
                <h4>Category 2</h4>
                <table >
                <tr>
                        <th>Items</th>
                        <th>Value</th>
                    </tr>
                    <tr>
                        <td>Item1</td>
                        <td>Value 1</td>
                    </tr>
                    <tr>
                        <td>Item 2</td>
                        <td>Value 2</td>
                    </tr>
                    <tr>
                        <td>Item 3</td>
                        <td>Value 3</td>
                    </tr>
                    <tr>
                        <td>Item4</td>
                        <td>Value 4</td>
                </tr>
            </table>
       </div>    
    </div>
)
}