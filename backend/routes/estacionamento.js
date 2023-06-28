var express = require('express');
var router = express.Router();
var estacionamentoController = require('../controlers/estacionamento');

router.get('/', estacionamentoController.getEstacionamentos);
router.post('/', estacionamentoController.createEstacionamento);
router.get('/procurarpor', estacionamentoController.procurarEstac);
router.get('/:id', estacionamentoController.EstacionamentoGetone);
router.put('/:id', estacionamentoController.EstacionamentoUpdate);
router.get('/byUser/:id', estacionamentoController.EstacionamentoGetoneBYUser);
router.get('/byEstac/:id', estacionamentoController.EstacionamentoGetoneBYestac);

module.exports = router;