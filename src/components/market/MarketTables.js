
import React from 'react';
import MarketItem from './MarketItem';
import { Table, Row, Col } from 'react-bootstrap';

export default function MarketTables(props) {
  return (
    <div className="table_div">
      <Row>
        {props.items.map(item => (
          <Col sm={6} xl={4} xxl={3} className="my-4">
            <h4>{item.categoryTitle}</h4>
            <Table variant="dark" responsive striped bordered hover>
              <tbody>

                {item.list.map(item => <MarketItem name={item.name} price={item.price} />)}
              </tbody>
            </Table>
          </Col>
        ))}
      </Row>
    </div>
  )
}