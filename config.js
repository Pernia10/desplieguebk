const mongoose = require('mongoose');
require('dotenv').config()

const dbconnect = () => {
    mongoose.connect(process.env.MONGODB_URL)
        .then(() => {
            console.log("Conexión exitosa a MongoDB");
        })
        .catch((err) => {
            console.error("Error de conexión a MongoDB:", err.message);
        });
}

module.exports = dbconnect;

