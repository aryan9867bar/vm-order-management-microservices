import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [orders, setOrders] = useState([]);
  const [form, setForm] = useState({
    customer_name: "",
    product_name: "",
    quantity: "",
    price: ""
  });

  const BACKEND_URL = "http://192.168.56.3:3000/api/orders";

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const res = await axios.get(BACKEND_URL);
    setOrders(res.data);
  };

  const createOrder = async () => {
    if (!form.customer_name || !form.product_name) return;
    await axios.post(BACKEND_URL, form);
    fetchOrders();
    setForm({ customer_name: "", product_name: "", quantity: "", price: "" });
  };

  return (
    <div className="container">
      <h1 className="title">📦 Order Management System</h1>

      <div className="card">
        <h3>Create New Order</h3>

        <input
          placeholder="Customer Name"
          value={form.customer_name}
          onChange={e => setForm({ ...form, customer_name: e.target.value })}
        />

        <input
          placeholder="Product Name"
          value={form.product_name}
          onChange={e => setForm({ ...form, product_name: e.target.value })}
        />

        <input
          type="number"
          placeholder="Quantity"
          value={form.quantity}
          onChange={e => setForm({ ...form, quantity: e.target.value })}
        />

        <input
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={e => setForm({ ...form, price: e.target.value })}
        />

        <button onClick={createOrder}>Create Order</button>
      </div>

      <div className="card">
        <h3>Orders</h3>

        {orders.length === 0 ? (
          <p className="empty">No orders available</p>
        ) : (
          <ul className="order-list">
            {orders.map(order => (
              <li key={order.id} className="order-item">
                <strong>{order.customer_name}</strong>
                <span>{order.product_name} × {order.quantity}</span>
                <span className="price">₹{order.price}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
