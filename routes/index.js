var express = require('express');
var data_templates = require('../data/templates');
var todo = require('../controller/todo');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    if (!req.session.user) {
        res.render('index', {title: 'To do List', data: data_templates});
    }
    else {
        res.redirect('/todo');
    }
});

//Regi
router.get('/regi', function (req, res) {
    if (!req.session.user) {
        res.render('regi', {title: 'ГАЗЕНВАГЕН', data: data_templates});
    } else {
        res.redirect('/todo');
    }

});

router.post('/regi', function (req, res) {
    require('../controller/regi').post(req, res);
});

//Login & Logout

router.post('/login', function (req, res) {
    require('../controller/login').post(req, res);

});

router.get('/logout', function (req, res) {
    delete req.session.user;
    res.redirect('/');
});

//About
router.get('/about', function (req, res) {
    if (!req.session.user) {
        res.render('about', {title: 'About', data: data_templates});
    } else {
        res.redirect('/todo')
    }

});

//TodoList
router.get('/todo', function (req, res) {
    if (!req.session.user) {
        res.redirect('/');
    } else {
        var list = todo.GetList(req.session.user);

        console.log('list', list);
            res.render('todo', {list: list, title: 'To do List', todo: {cur_user: req.session.user, data: data_templates}});
    }
});


//return next(new HttpError(403, err.message));

router.post('/todo', function (req, res) {
    var user = req.session.user;
    require('../controller/create_todo').post(req, res, user);
});


module.exports = router;
