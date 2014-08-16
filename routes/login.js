var User = require('../model/user').User;
exports.get = function (req, res) {
    res.render('index');
};

exports.post = function (req, res, next) {
    var qRes = res,
        user = req.body.username,
        pass = req.body.password;
    User.findOne({username: user}, function (err, userDb, next) {
        console.log('huj 1' );
        if (userDb == null) {
            console.log('huj 12' );
            res.writeHead(403, {"Content-Type": "text/plain"});
            res.end('"Такова пацанчика нет"');
        } else if (userDb.password != pass) {
            res.writeHead(403, {"Content-Type": "text/plain"});
            res.end('"Че с паролем пацантрэ??"');
        }
        else {
            console.log('huj 2' );
            req.session.user = user;
            qRes.send({});
        }

    });

};