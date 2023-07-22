const express = require('express');
const router = express.Router();

// Import  routes
const flowerRoutes = require("./flower.routes");
const cutomerRoutes = require("./customer.routes");

// Mount  routes
router.use("/flowers", flowerRoutes);
router.use("/customers", cutomerRoutes);

module.exports = router;