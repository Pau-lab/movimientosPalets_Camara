const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema ({
    idProd: {
        type: String,
        required: true,
        uppercase: true
    },
    especie: {
        type: String,
        required: true,
        lowercase: true,
    },
    color: {
        type:String,
        lowercase: true,

    }
});

const Producto = mongoose.model ('Producto', productoSchema);

module.exports = Producto;