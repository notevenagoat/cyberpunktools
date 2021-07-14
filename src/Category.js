
import React from 'react';
import MarketItem from './MarketItem';
import { Table } from 'react-bootstrap';

export default function Category(props) {
    return (
    <div responsive>
        <div >
            <h4>Category 1</h4>
              
            <Table striped bordered hover responsive>
              {props.cat1_items.map(item => <MarketItem name={item.name} price={item.price} />)}
            </Table>
                 
        </div>
        <div >
                <h4>Category 2</h4>
                <Table striped bordered hover responsive>
                {props.cat2_items.map(item => <MarketItem name={item.name} price={item.price} />)}
            </Table>
       </div>    
    </div>
)
}