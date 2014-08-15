var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo_js2');
module.exports = mongoose;