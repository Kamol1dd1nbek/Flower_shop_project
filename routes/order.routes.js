const express = require('express');
const router = express.Router();

const orderController = require("../controllers/orders.controlers");

// Get all orders
router.get("/", orderController.getAllOrders);

// Get Order By Id
router.get("/:id", orderController.getOrderById);

// Add new Order
router.post("/", orderController.addOrder);

// Update a order
router.put("/:id", orderController.updateOrder);

// Delete a order
router.delete("/:id", orderController.deleteOrder);

module.exports = router;