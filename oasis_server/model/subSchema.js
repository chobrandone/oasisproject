var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var subSchema = new Schema({
  fullName: {
        type: String,
        required: true
    },
  email: {
        type: String,
        unique: true,
        required: true
    }
    
});

module.exports = mongoose.model('subscribers', subSchema);