//var mongo = require('mongodb');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo_js');

console.log('joo',mongoose);

//test DB connection
//var db = mongoose.connection;
//db.on('error', console.error.bind(console, 'connection error:'));
//db.once('open', function callback () {
//    // yay!
//    console.log('uj');
//});


exports.mongoose = mongoose;