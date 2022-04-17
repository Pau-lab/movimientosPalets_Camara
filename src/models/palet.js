const {Schema, model} = require('mongoose');

const paletSchema = new Schema ({
    idPalet: {
        type: String,
        required: true,
        unique: true,
    },
    producto: {
        type: String,
        uppercase: true,
    },
    calibre: {
        type: String,
        uppercase: true,
    },
    caja: {
        type: String,
        uppercase: true,
    },
    alveolo: {
        type: String,
    },
    size: {
        type: String,
        enum: ['EU', 'F']
    },
    localizacion: {
        type: String,
        enum: ['CAMARA', 'PLAZA', 'EXPEDIDO'],
        default: 'CAMARA'
    },
    fila: {
        type: String,
        default: 'espacio'
    }
}, {
    timestamps: true
})


const Palet = model('Palet', paletSchema);

module.exports = Palet;

