const mongoose = require('mongoose');

const cajaSchema = new mongoose.Schema ({
    idCaja: {
        type: String,
        required: true,
        uppercase: true
    },
    size: {
        type: String,
        uppercase: true
    }
});

const Caja = mongoose.model ('Caja', cajaSchema);

module.exports = Caja;