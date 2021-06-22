var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
  fullName: {
        type: String,
        required: true
    },
   Phone : {
        type: Number,
        required: true
    },
    email: {
        type: String,
        
    },
    message: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('contacts', ContactSchema);