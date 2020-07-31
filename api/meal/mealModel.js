var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var MealSchema =new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Meal", MealSchema, "Meals");