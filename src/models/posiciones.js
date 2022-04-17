const {Schema, model} = require('mongoose');


// ___MODELO DE ULTIMA POSICION DE LOS PALETS - SE ACTUALIZARA CON CADA MOVIMIENTO
const posicionActualSchema = new Schema ({
    idFila: String,
    zona: {
        type: String,
        enum: ['SUELO', 'PARED', 'ARRIBA', 'ESPACIO'],
    },
    ordenPalets: Array,

},{
    timeStamp: true
})

const PosicionActual = model('PosicionActual', posicionActualSchema);

module.exports = PosicionActual;

// ___ MODELO DE POSICION ANTERIOR TRAS CADA MOVIMIENTO - PARA VOLVER ATRAS.
// const posicionAnteriorSchema = new Schema ({
//     idFila: String,
//     zona: {
//         type: String,
//         enum: ['SUELO', 'PARED', 'ARRIBA', 'ESPACIO'],
//     },
//     ordenPalets: Array,
// },{
//     timeStamp: true
// })

// const PosicionAnterior = model('PosicionAnterior', posicionAnteriorSchema);

// module.exports = PosicionAnterior;