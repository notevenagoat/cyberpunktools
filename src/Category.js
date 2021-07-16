
import React from 'react';
import MarketItem from './MarketItem';
import { Table } from 'react-bootstrap';

export default function Category(props) {
    return (
    <div className=" table_div">
        {props.items.map(item => (
          <div className="m-4" md="auto">
            <h4>{item.categoryTitle}</h4>
            <Table responsive striped bordered hover>
              <tbody>
    
                {item.list.map(item => <MarketItem name={item.name} price={item.price} />)}
              </tbody>    
            </Table>
          </div>
        ))}
    </div>
)
}