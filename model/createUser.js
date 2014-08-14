console.log('1');

var mongoose = require('../model/mongoose');

console.log('12');
var Schema = mongoose.Schema;

console.log('13');
var schema = new Schema({
    username: {type: String},
    password: {type: String}

    //username: {type: String, required: true, unique: true, trim: true},
    //password: {type: String, required: true}


});
console.log('14');

//mongoose.model("Fuck", Fuck);


//
////UserSchema.statics.classicLogin = function(login, pass, cb) {
////    if( login && pass ){
////        mongoose.models.User
////            .where( 'email', login )
////            .where( 'password', pass )
////            .findOne( cb )
////    } else {
////        // just to launch the standard error
////        var o = new this({nick: 'VeryUniquejerewelA', password: '', email: login+'aaa'})
////        o.save(cb)
////    }
////}
//
//
//schema.methods.checkLogin = function(login , pass){
//
//};
//
//


//exports.Fuck = mongoose.model('Fuck', schema);