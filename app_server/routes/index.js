var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

/* Получаем (GET) домашнюю страницу */
router.get('/', ctrlMain.index);

module.exports = router;
