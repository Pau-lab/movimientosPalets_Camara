const {Router} = require ('express');

const router = Router();

const {
    renderCamara, 
    renderHistorico, 
    addPalet,
    deletePalet,
    sendToPlaza,
    sendToCamara,
    expedir,
    // actualizarPosiciones,
    actualizarFilaPalet,
} = require('../controllers/palets.controller')



router.get ('/', renderCamara)

router.get ('/historico', renderHistorico)

router.post ('/', addPalet)

router.delete ('/delete:id', deletePalet)

router.put ('/plaza:id', sendToPlaza)

router.put ('/camara:id', sendToCamara)

router.put ('/expedir:id', expedir)

// router.put ('/updateOrdenFila', actualizarPosiciones)

router.put ('/updateFilaPalet', actualizarFilaPalet)

module.exports = router