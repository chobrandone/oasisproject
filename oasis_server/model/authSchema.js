var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  fullName: {
        type: String,
        required: true
    },
  username: {
        type: String,
        unique: true,
        required: true
    },
  password: {
        type: String,
        required: true
    },
  confirm_password: {
        type: String,
        required: true
    },
  userProfileReference: {
        type: String,
        
    },
    userProfileUrl: {
        type: String,
        
    },
    bio: {
        type: String,
    }
});

module.exports = mongoose.model('User', UserSchema);