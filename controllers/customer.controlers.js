const db = require("../config/db");

// Get all customers
const getAllCustomers = (req, res) => {
  let query = "SELECT * FROM customers;";
  db.query(query, (error, result, fields) => {
    if (error) {
      console.log("error retrieving customers: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    if (result.length == 0) {
      return res.status(404).json({ error: "No customers found" });
    }
    res.json(result);
  });
};

// Get Customer By Id
const getCustomerById = (req, res) => {
  let query = "SELECT * FROM customers WHERE id = ?";
  let values = [req.params.id];
  db.query(query, values, (error, result) => {
    if (error) {
      console.log("error retrieving customers: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    if (result.length == 0) {
      return res.status(404).json({ error: "Customer not found" });
    }
    return res.json(result);
  });
};

// Add new customer
const addCustomer = (req, res) => {
  const { name, email } = req.body;
  let query = "INSERT INTO customers (name, email) VALUES (?, ?)";
  let values = [name, email];
  db.query(query, values, (error, result) => {
    if (error) {
      console.log("error retrieving customers: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    console.log(result);
    res.json({
      message: "Customer created successfully",
      customerId: result.insertId,
    });
  });
};

// Update Customer
const updateCustomer = (req, res) => {
  const { name, email } = req.body;
  let query = "UPDATE customers SET name = ?, email = ? WHERE id = ?";
  let values = [name, email, req.params.id];
  db.query(query, values, (error) => {
    if (error) {
      console.log("error retrieving customers: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json({ message: "Customer updated successfully" });
  });
};

// Delete customer
const deleteCustomer = (req, res) => {
  let query = "DELETE FROM customers WHERE id = ?";
  db.query(query, [req.params.id], (error) => {
    if (error) {
      console.log("error retrieving customers: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json({ message: "Customer deleted successfully" });
  });
};

module.exports = {
  getAllCustomers,
  getCustomerById,
  addCustomer,
  updateCustomer,
  deleteCustomer,
};
