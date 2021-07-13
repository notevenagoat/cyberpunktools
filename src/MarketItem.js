import React from 'react'

function MarketItem(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.price}eb</td>
    </tr>
  )
}

export default MarketItem
