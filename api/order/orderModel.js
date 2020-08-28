var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
    no_of_meals: {
        type: Number,
        required: true
    },
    no_of_days: {
        type: Number,
        required: true
    },
    total_amount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "owner"
    }
});

module.exports = mongoose.model("order", OrderSchema, "orders");