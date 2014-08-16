var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'To do List' });
    req.session.gaga = 'dddd';
    console.log('sesion check', req.session.huj );
});

router.get('/about', function(req, res) {
    res.render('about', { title: 'About' });
});

router.get('/regi', function(req, res) {
    res.render('regi', { title: 'ГАЗЕНВАГЕН' });
});

router.post('/regi', function(req, res) {
   require('./regi').post(req, res);
});

router.post('/login', function (req, res) {
   require('./login').post(req, res);

});

router.get('/list', function(req, res) {
    res.render('list', { title: 'To do List' });
});

module.exports = router;
