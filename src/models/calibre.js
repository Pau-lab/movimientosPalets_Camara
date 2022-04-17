const mongoose = require('mongoose');

const calibreSchema = new mongoose.Schema ({
    idCalibre: {
        type: String,
        required: true,
        uppercase: true
    },
    especie: {
        type: Array
    }
})

const Calibre = mongoose.model ('Calibre', calibreSchema);

module.exports = Calibre;