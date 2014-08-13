var mongoose = require('../model/mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    nick: {type: String, required: true, unique: true, trim: true},
    email: {type: String, required: true, unique: true, trim: true, lowercase: true},
    password: {type: String, required: true}
});

//UserSchema.statics.classicLogin = function(login, pass, cb) {
//    if( login && pass ){
//        mongoose.models.User
//            .where( 'email', login )
//            .where( 'password', pass )
//            .findOne( cb )
//    } else {
//        // just to launch the standard error
//        var o = new this({nick: 'VeryUniquejerewelA', password: '', email: login+'aaa'})
//        o.save(cb)
//    }
//}


schema.methods.checkLogin = function(login , pass){

};


exports.User = mongoose.model('User', schema);