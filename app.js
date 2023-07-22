const express = require('express');
const dotenv = require('dotenv').config();
const app = express();

// Routes
const routes = require("./routes/index.routes");

// Parse JSON bodies
app.use(express.json());

// Mount routes
app.use("/", routes);

// Start the server
const start = () => {
    try {
        const PORT = process.env.PORT || 3030;
        app.listen(PORT, () => {
            console.log(`Server is running on port: ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}
start();