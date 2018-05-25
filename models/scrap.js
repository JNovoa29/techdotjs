var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var scrap = new Schema({
    title: {
        type: String
    }

});

module.exports = mongoose.model('scrap', scrap);