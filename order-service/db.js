const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "192.168.56.2",
  user: "order_user",
  password: "Order@123",
  database: "order_management"
});

db.connect(err => {
  if (err) {
    console.error("DB Connection Failed:", err);
  } else {
    console.log("Connected to MySQL Database");
  }
});

module.exports = db;
