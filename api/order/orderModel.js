var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
    total_amount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true,
    },
    _meals: [{
        type: Schema.Types.ObjectId,
        ref: "Meal" 
    }],
    _user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    _tiffin_service: {
        type: Schema.Types.ObjectId,
        ref: "Tiffin Service"
    }
});

module.exports = mongoose.model("order", OrderSchema, "orders");