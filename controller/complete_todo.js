var Todo = require('../model/todo').Todo;
var errors = require('../data/errors');

exports.post = function (req, res, curUser) {
    var qRes = res,
        id = req.body.id;

    if (id == '' || id == null) {
        res.writeHead(403, {"Content-Type": "text/plain"});
        res.end(errors.some_thingWrong);
    } else {

        Todo.findOne({_id: id}, function (err, todo_data, next) {
            if (todo_data == null) {
                res.writeHead(403, {"Content-Type": "text/plain"});
                res.end(errors.some_thingWrong2);
            }
            else {
                todo_data.status = false;
                todo_data.save();
                qRes.send({});
            }

        });
    }
};