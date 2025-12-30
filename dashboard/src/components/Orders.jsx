import React from "react";
import { Link } from "react-router-dom";
import NoOrders from "./NoOrders";
import axios from "axios";
import { useState,useEffect } from "react";
const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allOrders").then((res) => {
      setAllOrders(res.data);
    });
  }, []);
  if (allOrders.length === 0) {
    return <NoOrders />;
  }
  return (
    <>
      {}
      <h3 className="title">Costs ({allOrders.length})</h3>
      <div className="order-table">
        <table>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>
          {allOrders.map((order, key) => {
            const name = order.name;
            const qty = order.qty;
            const price = order.price;
            const mode = order.mode;
            return (
              <tr key={key}>
                <td>{name}</td>
                <td>{qty}</td>
                <td>{price}</td>
                <td>{mode}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Orders;
