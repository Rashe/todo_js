var express = require('express');
var data_templates = require('../data/templates');
var url = require('url');
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
        res.redirect('/todo');
    }

});

//TodoList
router.get('/todo', function (req, res) {
    if (!req.session.user) {
        res.redirect('/');
    } else {
        var todo = require('../controller/todo');
        var list = todo.GetList(req.session.user, function (data) {
            res.render('todo', {
                list: data,
                title: 'To do List',
                todo: {cur_user: req.session.user, data: data_templates}
            });
        });
    }
});

router.post('/todo', function (req, res) {
    var user = req.session.user;
    require('../controller/create_todo').post(req, res, user);
});

router.post('/complete_todo', function (req, res) {
    require('../controller/complete_todo').post(req, res);
});

//user
router.get('/user/*', function (req, res) {
    var user = require('../controller/user');
    var parsed_path = (url.parse(req.url, true).pathname).split("/");
    var user_fromUrl = parsed_path[2];
    console.log('huj user', user_fromUrl);
    var lists = user.GetLists(user_fromUrl, function (data) {
        console.log('huj data', data);
        if (data == false) {
            res.render('user', {
                lists: data,
                title: 'User',
                todo: {cur_user: req.session.user, data: data_templates}
            });
        }
        res.render('user', {
            lists: data,
            title: 'User',
            todo: {cur_user: req.session.user, data: data_templates}
        });
    });


    //console.log('huj qu', req.query);
    //var path = url.parse(req.url, true).query;
});

module.exports = router;
