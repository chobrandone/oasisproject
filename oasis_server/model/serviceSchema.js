var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var serviceSchema = new Schema({
  heading: {
        type: String,
        required: true
    },
   desc : {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('service', serviceSchema);