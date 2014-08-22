var Todo = require('../model/todo').Todo;
var errors = require('../data/errors');
exports.get = function (req, res) {
    res.render('todo');
};

exports.post = function (req, res, curUser) {
    var qRes = res,
        user = curUser,
        title = req.body.addtodo;

    if (title == '' || title == null) {
        res.writeHead(403, {"Content-Type": "text/plain"});
        res.end(errors.fuck_you);
    } else {

        var insertToList = new Todo({
            username: user,
            title: title
        });

        insertToList.save(function (err) {
            if (err) throw  err;
            //res.writeHead(200, {"Content-Type": "text/plain"});
            //res.end(title);
        });
        qRes.send({title: title});
    }
};