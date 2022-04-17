const Palet = require ('../models/palet');
const Producto = require ('../models/producto');
const Caja = require ('../models/caja');
const Calibre = require ('../models/calibre');
const PosicionActual = require ('../models/posiciones');

const renderCamara = async (req, res) => {
    const palets = await Palet.find({})
    const productos = await Producto.find({});
    const calibres = await Calibre.find({});
    const cajas = await Caja.find({});
    const filas = await PosicionActual.find({});
    res.render ('camara', {palets, productos, calibres, cajas, filas})
}

const renderHistorico = async (req, res) => {
    const palets = await Palet.find({})
    res.render ('paletDB', {palets})
}

const addPalet = async (req, res) => {
    const newPalet = new Palet(req.body);
    await newPalet.save();
    console.log (newPalet)
    res.redirect('/')
}

const deletePalet = async (req, res) => {
    const {id} = req.params;
    const deletePalet = await Palet.findByIdAndDelete({_id: id});
    console.log(deletePalet);
    res.redirect('/')
}

const sendToPlaza = async (req, res) => {
    const {id} = req.params;
    const paletToPlaza = await Palet.findByIdAndUpdate({_id: id}, {localizacion: "PLAZA"},{new: true});
    console.log(paletToPlaza);
    res.redirect('/')
}

const sendToCamara = async (req, res) => {
    const {id} = req.params;
    const paletToCamara = await Palet.findByIdAndUpdate({_id: id}, {localizacion: "CAMARA"},{new: true});
    console.log(paletToCamara);
    res.redirect('/')
}

const expedir = async (req, res) => {
    const {id} = req.params;
    const paletExpedido = await Palet.findByIdAndUpdate({_id: id}, {localizacion: "EXPEDIDO"},{new: true});
    console.log(paletExpedido);
    res.redirect('/historico')
}

const actualizarFilaPalet = async (req, res) => {
    const {id, newFila,filaOrigen, posicionesOrigen,filaDestino, posicionesDestino} = req.body
    const paletActualizado = await Palet.findOneAndUpdate({idPalet: id}, {fila: newFila}, {new: true});
    const ordenFilaOrigen = await PosicionActual.findOneAndUpdate({idFila: filaOrigen}, {ordenPalets: posicionesOrigen}, {new: true});
    const ordenFilaDestino = await PosicionActual.findOneAndUpdate({idFila: filaDestino}, {ordenPalets: posicionesDestino}, {new: true});
    console.log(paletActualizado);
    console.log(ordenFilaOrigen);
    console.log(ordenFilaDestino);
    res.redirect('/')
}




module.exports = {
    renderCamara, 
    renderHistorico, 
    addPalet,
    deletePalet,
    sendToPlaza,
    sendToCamara,
    expedir,
    // actualizarPosiciones,
    actualizarFilaPalet,
}