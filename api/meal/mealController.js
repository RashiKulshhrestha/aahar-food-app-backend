var Meal = require('./mealModel');
var _ = require('lodash');

exports.idParam = function(req, res,next, id){
    Meal.findById(id)
    .then( function (meal){
        if(!meal){
            next(new Error("Not Found"));
        }
        else{
            req.meal = meal;
            next();
        }
    }, function(err) {
        next(err);
    });
};

exports.post = function(req, res, next) {
    var newMeal = req.body;
    Meal.create(newMeal)
        .then(function(meal){
            res.json(meal);
        }, function (err) {
            next(err);
        });
};

exports.get = function(req, res, next){
    Meal.find({})
    .then(function (meals){
        res.json(meals);
    }, function (err) {
        next(err);
    });
};
exports.getByID = function(res, req, next) {
    res.json(req.meal);
};

exports.put = function(req,res,next) {
    var updatedMeal = req.body;
    var existingMeal = req.meal;

    _.merge(updatedMeal,existingMeal);
    Meal.save(function (err, saved){
        if (err) { 
            next(err);
        }
        else{
            res.json(saved);
        }
    });
};

exports.delete = function(req, res, next) {
    req.meal.remove(function(err, removed) {
        if (err) {
            next(err);
        }
        else {
            res.status(204);
            res.send();
        }
    });
}