var express = require('express');
var data_templates = require('../data/templates');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    if (!req.session.user) {
        res.render('index', {title: 'To do List', data:data_templates});
    }
    else {
       res.redirect('/todo');
    }
});

router.get('/about', function (req, res) {
    if(!req.session.user){
        res.render('about', {title: 'About', data:data_templates});
    }else{
        res.redirect('/todo')
    }

});

router.get('/todo', function (req, res) {
    if (!req.session.user) {
        res.redirect('/');
    } else {
        res.render('todo', {title: 'To do List', todo:{cur_user: req.session.user, data:data_templates}});
    }
});

router.get('/regi', function (req, res) {
    if(!req.session.user){
        res.render('regi', {title: 'ГАЗЕНВАГЕН', data:data_templates});
    }else{
        res.redirect('/todo');
    }

});

router.post('/regi', function (req, res) {
    require('./regi').post(req, res);
});

router.post('/login', function (req, res) {
    require('./login').post(req, res);

});

//router.get('/list', function (req, res) {
//    res.render('list', {title: 'To do List', data:data_templates});
//});

router.get('/logout', function (req, res) {
    delete req.session.user;
    res.redirect('/');
});

module.exports = router;
