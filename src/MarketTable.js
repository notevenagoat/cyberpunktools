import React from 'react'
import MarketItem from './MarketItem'
import './MarketTable.css'

function MarketTable(props) {
  return (
    <table className='market-table'>
      <thead>
        <tr>
          <th>Item</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {props.items.map(item => <MarketItem name={item.name} price={item.price} />)}
      </tbody>

    </table>
  )
}

export default MarketTable
