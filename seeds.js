
const {connect} = require ('mongoose');
const Palet = require ('./src/models/palet');
const Calibre = require ('./src/models/calibre');
const Caja = require ('./src/models/caja');
const Producto = require ('./src/models/producto');
const PosicionActual = require ('./src/models/posiciones');
const {CONECTOR, OPTIONS} = require ('./src/app');





const seedProductos = [
    {
        idProd: 'NA',
        especie: 'nectarina',
        color: 'amarillo'
    },
    {
        idProd: 'NB',
        especie: 'nectarina',
        color: 'blanco'
    },
    {
        idProd: 'MR',
        especie: 'melocoton',
        color: 'rojo'
    },
    {
        idProd: 'MB',
        especie: 'melocoton',
        color: 'blanco'
    },
    {
        idProd: 'MA',
        especie: 'melocoton',
        color: 'amarillo'
    },
    {
        idProd: 'ALB',
        especie: 'albaricoque',
        color: 'amarillo'
    },
    {
        idProd: 'PGA',
        especie: 'paraguayo',
        color: 'amarillo'
    },
    {
        idProd: 'PGB',
        especie: 'paraguayo',
        color: 'blanco'
    },
    {
        idProd: 'CRZ',
        especie: 'cereza',
        
    },
    {
        idProd: 'CIR',
        especie: 'ciruela',
        
    },
    {
        idProd: 'OTR',
        especie: 'otras',
    },   
];

const seedCajas = [
    {
        idCaja: 'NICO',
        size:'F'
    },
    {
        idCaja: 'NELA',
        size:'F'
    },
    {
        idCaja: 'DEHESA',
        size:'F'
    },
    {
        idCaja: 'GENERICA',
        size:'EU'
    },
    {
        idCaja: 'SL',
        size:'EU'
    },
    {
        idCaja: 'MIGROS',
        size:'EU'
    },
    {
        idCaja: 'LIDL',
        size:'EU'
    },
    {
        idCaja: 'EPS',
        size:'EU'
    },
    {
        idCaja: 'IFCO',
        size:'EU'
    },
    {
        idCaja: 'ICA',
        size:'EU'
    },
];

const seedCalibres = [
    {
        idCalibre:'4A',
        especie: ['nectarina', 'melocoton', 'paraguayo','albaricoque']
    },
    {
        idCalibre:'3A',
        especie: ['nectarina', 'melocoton', 'paraguayo','albaricoque']
    },
    {
        idCalibre:'2A',
        especie: ['nectarina', 'melocoton', 'paraguayo','albaricoque']
    },
    {
        idCalibre:'A',
        especie: ['nectarina', 'melocoton', 'paraguayo','albaricoque']
    },
    {
        idCalibre:'B',
        especie: ['nectarina', 'melocoton', 'paraguayo','albaricoque']
    },
    {
        idCalibre:'C',
        especie: ['nectarina', 'melocoton', 'paraguayo','albaricoque']
    },
    {
        idCalibre:'D',
        especie: ['nectarina', 'melocoton', 'paraguayo']
    },
    {
        idCalibre:'5A',
        especie: ['albaricoque']
    },
    {
        idCalibre:'20+',
        especie: ['cereza']
    },
    {
        idCalibre:'22+',
        especie: ['cereza']
    },
    {
        idCalibre:'24+',
        especie: ['cereza']
    },
    {
        idCalibre:'26+',
        especie: ['cereza']
    },
    {
        idCalibre:'28+',
        especie: ['cereza']
    },
    {
        idCalibre:'30+',
        especie: ['cereza']
    },
    {
        idCalibre:'32+',
        especie: ['cereza']
    },
];


const seedPalets = [
    {
        idPalet: '11111',
        producto: 'NA',
        calibre: '2A',
        caja: 'MIGROS',
        alveolo: '35',
        size:'EU',
        localizacion: 'CAMARA',
    },
    {
        idPalet: '22222',
        producto: 'MB',
        calibre: 'A',
        caja: 'IFCO',
        alveolo: '42',
        size:'EU',
        localizacion: 'CAMARA',
    },
    {
        idPalet: '33333',
        producto: 'NB',
        calibre: 'B',
        caja: 'DEHESA',
        alveolo: '28',
        size:'F',
        localizacion: 'CAMARA',
    }
]

// const filasSuelo=[];
// function insertarFila(zona) {

//     for (let i = 1; i < 14; i++){
//         var fila = zona+[i];
//         filasSuelo.push(fila);
//         console.log(filasSuelo);
        
//     }
// }

// insertarFila('fs')
// console.log(filasSuelo);
// insertarFila('filasPared','fp')
// insertarFila('filasArriba','fa')

const seedPosicionesActuales = [
    // {
    //     idFila: 'espacio',
    //     zona: 'ESPACIO',
    //     ordenPalets: [],
    // },
    // {
    //     idFila: 'fs1',
    //     zona: 'SUELO',
    //     ordenPalets: [],
    // },
    // {
    //     idFila: 'fs2',
    //     zona: 'SUELO',
    //     ordenPalets: []
    // },
    // {
    //     idFila: 'fp1',
    //     zona: 'PARED',
    //     ordenPalets: []
    // },
    // {
    //     idFila: 'fp2',
    //     zona: 'PARED',
    //     ordenPalets: []
    // },
    // {
    //     idFila: 'fa1',
    //     zona: 'ARRIBA',
    //     ordenPalets: []
    // },
    // {
    //     idFila: 'fa2',
    //     zona: 'ARRIBA',
    //     ordenPalets: []
    // },
    
]
function crearFilas() {
    for (let i = 3; i < 14; i++) {
        var filaSuelo = 'fs'+[i];
        var filaPared = 'fp'+[i];
        var filaArriba = 'fa'+[i];
        seedPosicionesActuales.push(
            {
                idFila: filaSuelo,
                zona: 'SUELO',
                ordenPalets: []
            },
            {
                idFila: filaPared,
                zona: 'PARED',
                ordenPalets: []
            },
            {
                idFila: filaArriba,
                zona: 'ARRIBA',
                ordenPalets: []
            },
        );
    };
};

crearFilas();

// Palet.insertMany(seedPalets)
//     .then ( res => {
//         console.log(res)
//     })
//     .catch (e => {
//         console.log(e)
// });

// Producto.insertMany(seedProductos)
//     .then ( res => {
//         console.log(res)
//     })
//     .catch (e => {
//         console.log(e)
//  });

// Caja.insertMany(seedCajas)
//     .then ( res => {
//         console.log(res)
//     })
//     .catch (e => {
//         console.log(e)
// });

// Calibre.insertMany(seedCalibres)
//     .then ( res => {
//         console.log(res)
//     })
//     .catch (e => {
//         console.log(e)
// });

PosicionActual.insertMany(seedPosicionesActuales)
    .then ( res => {
        console.log(res)
    })
    .catch (e => {
        console.log(e)
});
