var User = require('../model/user').User;
exports.get = function (req, res) {
    res.render('regi');
};

exports.post = function (req, res, next) {
    var qRes = res,
        user = req.body.username,
        pass = req.body.password;

    User.findOne({username: user}, function (err, userDb, next) {
        console.log('find one', user , userDb );
        if (userDb != null) {
            console.log('nul check ');
            res.writeHead(403, {"Content-Type": "text/plain"});
            res.end('"Такой пацанчик уже есть"');
        }
        else {

            var createUser = User({
                username: user,
                password: pass
            });

            createUser.save(function (err, createUser, callback) {
                if (err) throw  err;

            });

            req.session.user = user;
            qRes.send({});
        }
    });


};