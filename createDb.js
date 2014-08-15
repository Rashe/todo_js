//1

//var MongoClient = require('mongodb').MongoClient, format = require('util').format;
//MongoClient.connect('mongodb://127.0.0.1:27017/test', function (err, db) {
//    if (err) throw err;
//    var collection = db.collection('test_insert');
//    //collection.remove({}, function (err, callback) {
//    //    if (err) throw  err;
//    //    console.log('huj ', callback);
//    //});
//    collection.insert({a: 3}, function (err, docs) {
//        // Locate all the entries using fin
//    });
//    collection.insert({name: 'huj'}, function (err, docs) {
//        // Locate all the entries using fin
//    });
//    collection.find().toArray(function (err, results) {
//        console.dir(results);
//        // Let's close the db
//        db.close();
//    });
//});


//2

//var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/todo_js');
//var Cat = mongoose.model('Cat', {name: String});
//var kitty = new Cat({name: 'Zildjian'});
//var bitchy = new Cat({name: 'GazenVagen'});
//kitty.save(function (err) {
//    if (err) throw  err;
//});
//
//bitchy.save(function(err){
//   if(err) throw  err;
//});
//console.log('huj ', kitty);
//console.log('huj2 ', bitchy);

//3

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo_js');
var schema = mongoose.Schema({
name: String
});
schema.methods.meow = function() {
    console.log(this.get('name') );
};
var Cat = mongoose.model('Cat', schema);
var kitty = new Cat({name: 'Zildjian'});
var bitchy = new Cat({name: 'GazenVagen'});
kitty.save(function (err) {
    if (err) throw  err;
});
bitchy.save(function(err){
    if(err) throw  err;
});
kitty.meow();