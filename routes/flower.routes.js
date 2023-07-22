const express = require('express');
const router = express.Router();

const flowerController = require("../controllers/flower.controlers");

// Get all flowers
router.get("/", flowerController.getAllFlowers);

// Get Flower By Id
router.get("/:id", flowerController.getFlowerById);

// Add new Flower
router.post("/", flowerController.addFlower);

// Update a flower
router.put("/:id", flowerController.updateFlower);

// Delete a flower
router.delete("/:id", flowerController.deleteFlower);

module.exports = router;