var express = require('express');
var router = express.Router();
var funcController = require('../controlers/funcionario');

router.get('/', funcController.getFuncios);
router.post('/', funcController.createFuncio);
router.get('/:id', funcController.validarId, funcController.validarFuncio, funcController.funcioGetone);
router.put('/:id', funcController.validarId, funcController.validarFuncio, funcController.funcioUpdate);
router.put('/modific/:id', funcController.validarId, funcController.validarFuncio, funcController.permissFuncio);

module.exports = router;