var express = require('express');
var router = express.Router();
var clitController = require('../controlers/cliente.js');

router.get('/', clitController.getClientes);
router.post('/', clitController.createCliente);
router.get('/:id', clitController.validarId, clitController.validarCliente, clitController.clienteGetone);
router.put('/:id', clitController.validarId, clitController.validarCliente, clitController.clienteUpdate);

module.exports = router;