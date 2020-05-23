var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/personal', function(req, res, next) {
  res.render('personal', { title: 'Express User' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Us' });
});

router.get('/international', function(req, res, next) {
  res.render('international', { title: 'International Map' });
});

router.get('/united', function(req, res, next) {
  res.render('united', { title: 'United Map' });
});

router.get('/log_in', function(req, res, next) {
  res.render('log_in', { title: 'Log In Page' });
});



module.exports = router;
