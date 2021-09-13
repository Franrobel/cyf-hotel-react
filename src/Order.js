import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const { orderType } = props;
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(orders + 1);
  };
  return (
    <li>
      {orderType}: {orders}
      <RestaurantButton number={orderOne} />
    </li>
  );
};
export default Order;
