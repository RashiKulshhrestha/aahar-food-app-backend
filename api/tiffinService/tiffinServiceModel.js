var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TiffinServiceSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    meals: {
        type: Schema.Types.ObjectId,
        ref: "Meal"
    }
});

module.exports = mongoose.model('tiffinService', TiffinServiceSchema, 'tiffinServices');