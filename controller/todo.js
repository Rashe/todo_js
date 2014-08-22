var Todo = require('../model/todo').Todo;
var errors = require('../data/errors');

//function GetList(username, res){
//    var all_list='';
//   Todo.find({username: username}, function(err, list, next){
//       if(err) throw  err;
//       console.log('huj data_controller', list);
//       all_list = list;
//   });
//}



var GetList = function(username){
    //var all_list='';
    Todo.find({username: username}, function(err, list, callback){
        if(err) throw  err;
        console.log('huj data_controller', list);
      //all_list= list;
        callback(list);
    });
    //return all_list;
};

//var lister = GetList();

module.exports.GetList = GetList;




//var x = 5;
//var addX = function(value) {
//    return value + x;
//};
//module.exports.x = x;
//module.exports.addX = addX;
////Now we can use our loaded module:
//
//    var misc = require('./misc');
//console.log("Adding %d to 10 gives us %d", misc.x, misc.addX(10));