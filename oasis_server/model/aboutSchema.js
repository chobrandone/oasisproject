var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AboutUsSchema = new Schema({
  heading: {
        type: String,
        required: true
    },
   desc : {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('aboutUs', AboutUsSchema);