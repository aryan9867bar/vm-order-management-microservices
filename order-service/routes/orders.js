const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/orders", (req, res) => {
  const { customer_name, product_name, quantity, price } = req.body;

  const sql = `
    INSERT INTO orders (customer_name, product_name, quantity, price)
    VALUES (?, ?, ?, ?)
  `;

  db.query(sql, [customer_name, product_name, quantity, price], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Order created successfully" });
  });
});

router.get("/orders", (req, res) => {
  db.query("SELECT * FROM orders", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

module.exports = router;
