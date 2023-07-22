const express = require('express');
const router = express.Router();

const customerController = require("../controllers/customer.controlers");

// Get all customers
router.get("/", customerController.getAllCustomers);

// Get Customer By Id
router.get("/:id", customerController.getCustomerById);

// Add new Customer
router.post("/", customerController.addCustomer);

// Update a customer
router.put("/:id", customerController.updateCustomer);

// Delete a customer
router.delete("/:id", customerController.deleteCustomer);

module.exports = router;