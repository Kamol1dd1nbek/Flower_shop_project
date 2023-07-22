const db = require("../config/db");

// Get all orders
const getAllOrders = (req, res) => {
  let query = "SELECT * FROM orders;";
  db.query(query, (error, result, fields) => {
    if (error) {
      console.log("error retrieving orders: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    if (result.length == 0) {
      return res.status(404).json({ error: "No orders found" });
    }
    res.json(result);
  });
};

// Get Order By Id
const getOrderById = (req, res) => {
  let query = "SELECT * FROM orders WHERE id = ?";
  let values = [req.params.id];
  db.query(query, values, (error, result) => {
    if (error) {
      console.log("error retrieving orders: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    if (result.length == 0) {
      return res.status(404).json({ error: "Order not found" });
    }
    return res.json(result);
  });
};

// Add new customer
const addOrder = (req, res) => {
  const { customer_id, flower_id, quentity } = req.body;
  let query = "INSERT INTO orders (customer_id, flower_id, quentity) VALUES (?, ?, ?)";
  let values = [customer_id, flower_id, quentity];
  db.query(query, values, (error, result) => {
    if (error) {
      console.log("error retrieving orders: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    console.log(result);
    res.json({
      message: "Order created successfully",
      customerId: result.insertId,
    });
  });
};

// Update Order
const updateOrder = (req, res) => {
  const { customer_id, flower_id, quentity } = req.body;
  let query = "UPDATE orders SET customer_id = ?, flower_id = ?, quentity = ? WHERE id = ?";
  let values = [customer_id, flower_id, quentity, req.params.id];
  db.query(query, values, (error) => {
    if (error) {
      console.log("error retrieving orders: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json({ message: "Order updated successfully" });
  });
};

// Delete customer
const deleteOrder = (req, res) => {
  let query = "DELETE FROM orders WHERE id = ?";
  db.query(query, [req.params.id], (error) => {
    if (error) {
      console.log("error retrieving orders: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json({ message: "Order deleted successfully" });
  });
};


module.exports = {
  getAllOrders,
  getOrderById,
  addOrder,
  updateOrder,
  deleteOrder,
};
