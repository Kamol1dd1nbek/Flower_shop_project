const express = require('express');
const dotenv = require('dotenv').config();

const app = express();

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
// 22:25