var express = require('express');
var router = express.Router();


/* Берем анонимную функцию и описываем ее как именованную */
var homepageController = function(req, res, next) {
  res.render('index', { title: 'Express' });
};

/* Передаем имя этой фукции в виде обратного вызова в описании маршрута */
router.get('/', homepageController);

module.exports = router;
