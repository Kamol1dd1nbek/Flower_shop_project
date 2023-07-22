const db = require("../config/db");

// Get all flowers
const getAllFlowers = (req, res) => {
  let query = "SELECT * FROM flowers;";
  db.query(query, (error, result, fields) => {
    if (error) {
      console.log("error retrieving flowers: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    if (result.length == 0) {
      return res.status(404).json({ error: "No flowers found" });
    }
    res.json(result);
  });
};

// Get Flower By Id
const getFlowerById = (req, res) => {
  let query = "SELECT * FROM flowers WHERE id = ?";
  let values = [req.params.id];
  db.query(query, values, (error, result) => {
    if (error) {
      console.log("error retrieving flowers: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    if (result.length == 0) {
      return res.status(404).json({ error: "Flower not found" });
    }
    return res.json(result);
  });
};

// Add new flower
const addFlower = (req, res) => {
  const { name, color, price } = req.body;
  let query = "INSERT INTO flowers (name, color, price) VALUES (?, ?, ?)";
  let values = [name, color, price];
  db.query(query, values, (error, result) => {
    if (error) {
      console.log("error retrieving flowers: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    console.log(result);
    res.json({
      message: "Flower created successfully",
      flowerId: result.insertId,
    });
  });
};

// Update Flower
const updateFlower = (req, res) => {
  const { name, color, price } = req.body;
  let query = "UPDATE flowers SET name = ?, color = ?, price = ? WHERE id = ?";
  let values = [name, color, price, req.params.id];
  db.query(query, values, (error) => {
    if (error) {
      console.log("error retrieving flowers: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json({ message: "Flower updated successfully" });
  });
};

// Delete flower
const deleteFlower = (req, res) => {
  let query = "DELETE FROM flowers WHERE id = ?";
  db.query(query, [req.params.id], (error) => {
    if (error) {
      console.log("error retrieving flowers: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json({ message: "Flower deleted successfully" });
  });
};

module.exports = {
  getAllFlowers,
  getFlowerById,
  addFlower,
  updateFlower,
  deleteFlower,
};
