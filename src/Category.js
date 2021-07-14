
import React from 'react';
import MarketItem from './MarketItem';
import { Table } from 'react-bootstrap';

export default function Category(props) {
    return (
    <div responsive>
        {props.items.map(item => (
          <div>
            <h4>{item.category}</h4>
            <Table striped bordered hover responsive >
              {item.list.map(item => <MarketItem name={item.name} price={item.price} />)}
            </Table>
          </div>
        ))}
    </div>
)
}