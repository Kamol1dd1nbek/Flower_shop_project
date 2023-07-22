const express = require('express');
const router = express.Router();

// Import flower routes
const flowerRoutes = require("./flower.routes");

// Mount flower routes
router.use("/flowers", flowerRoutes);

module.exports = router;