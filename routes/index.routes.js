const express = require('express');
const router = express.Router();

// Import  routes
const flowerRoutes = require("./flower.routes");
const cutomerRoutes = require("./customer.routes");
const orderRoutes = require("./order.routes");

// Mount  routes
router.use("/flowers", flowerRoutes);
router.use("/customers", cutomerRoutes);
router.use("/orders", orderRoutes);

module.exports = router;