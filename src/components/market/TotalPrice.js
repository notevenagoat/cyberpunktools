import React from "react";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

function TotalPrice(props) {
  const items = props.items;

  //add all to new array

  let newArr = [];
  items.forEach((item) => {
    const itemList = item.list;
    itemList.forEach((newItemList) => {
      newArr.push(newItemList);
    });
  });

  function sum(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
      sum += array[i].price;
    }

    return sum;
  }

  return (
    <div>
      <h1>{`Total Price is : ${sum(newArr)}`}</h1>
    </div>
  );
}

export default TotalPrice;
