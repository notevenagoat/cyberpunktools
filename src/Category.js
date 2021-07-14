
import React from 'react';
import MarketItem from './MarketItem';

export default function Category(props) {
    return (
    <div className="table_div">
            <div className="first_cate">
                <h4>Category 1</h4>
            <table >
              {props.cat1_items.map(item => <MarketItem name={item.name} price={item.price} />)}
            </table>
        </div>
        <div className="second_cate">
                <h4>Category 2</h4>
                <table >
                {props.cat2_items.map(item => <MarketItem name={item.name} price={item.price} />)}
            </table>
       </div>    
    </div>
)
}