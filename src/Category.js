
import React from 'react';
import MarketItem from './MarketItem';
import { Table } from 'react-bootstrap';

export default function Category(props) {
    return (
    <div responsive>
        {props.items.map(item => (
          <div>
            <h4>{item.categoryTitle}</h4>
            <Table striped bordered hover >
            <tbody>
                {item.list.map(item => <MarketItem name={item.name} price={item.price} />)}
            </tbody>    
            </Table>
          </div>
        ))}
    </div>
)
}