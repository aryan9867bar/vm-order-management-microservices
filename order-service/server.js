const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const orderRoutes = require("./routes/orders");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api", orderRoutes);

app.listen(3000, () => {
  console.log("Order Management Service running on port 3000");
});
