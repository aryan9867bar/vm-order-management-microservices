import React, { useState, useEffect } from "react";
import axios from "axios";

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
    await axios.post(BACKEND_URL, form);
    fetchOrders();
    setForm({ customer_name: "", product_name: "", quantity: "", price: "" });
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Order Management System</h2>

      <input placeholder="Customer Name"
        value={form.customer_name}
        onChange={e => setForm({ ...form, customer_name: e.target.value })}
      /><br /><br />

      <input placeholder="Product Name"
        value={form.product_name}
        onChange={e => setForm({ ...form, product_name: e.target.value })}
      /><br /><br />

      <input placeholder="Quantity"
        value={form.quantity}
        onChange={e => setForm({ ...form, quantity: e.target.value })}
      /><br /><br />

      <input placeholder="Price"
        value={form.price}
        onChange={e => setForm({ ...form, price: e.target.value })}
      /><br /><br />

      <button onClick={createOrder}>Create Order</button>

      <h3>Orders</h3>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            {order.customer_name} - {order.product_name} - ₹{order.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
