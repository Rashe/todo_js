var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'To do List' });
});

router.get('/about', function(req, res) {
    res.render('about', { title: 'About' });
});

router.post('/regi', function(req, res) {
   require('./regi');
});

router.get('/list', function(req, res) {
    res.render('list', { title: 'To do List' });
});

module.exports = router;
