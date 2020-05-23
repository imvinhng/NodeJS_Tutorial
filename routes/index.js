var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/user', function(req, res, next) {
  res.render('user', { title: 'Express User' });
});

router.get('/international', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/united', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/help', function(req, res, next) {
  res.send('respond with a resource');
});



module.exports = router;
