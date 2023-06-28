var express = require('express');
var router = express.Router();
var validController = require('../controlers/validacao');

router.post("/login_auth", validController.login);

module.exports = router;