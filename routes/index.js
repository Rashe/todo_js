var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'To do List' });
    req.session.gaga = 'dddd';
    console.log('opaopa', req.session.user );
});

router.get('/about', function(req, res) {
    res.render('about', { title: 'About' });
    console.log('ddd2', req.session.gaga);
});

router.get('/regi', function(req, res) {
    res.render('regi', { title: 'ГАЗЕНВАГЕН' });
    console.log('ddd3', req.session.gaga);
});

router.post('/regi', function(req, res) {
   require('./regi').post(req);
});

router.get('/list', function(req, res) {
    res.render('list', { title: 'To do List' });
});

module.exports = router;
