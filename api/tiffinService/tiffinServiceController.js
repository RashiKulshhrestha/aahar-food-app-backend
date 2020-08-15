const TiffinService = require("./tiffinServiceModel");
const Meal = require("../meal/mealModel");
const _ = require("lodash");

function handleError(res, err) {
  return res.send(500, err);
}

// Get list of restaurants
exports.index = function(req, res) {
    TiffinService.find(function(err, tiffinServices) {
    if (err) {
      return handleError(res, err);
    }
    return res.json(200, tiffinServices);
  });
};

// Get a single restaurant
exports.show = function(req, res) {
    TiffinService.findById(req.params.id)
    .populate("_meals")
    .exec(function(err, tiffinService) {
      if (err) {
        return handleError(res, err);
      }

      if (!tiffinService) {
        return res.send(404);
      }

      return res.json(tiffinService);
    });
};

exports.create = function(req, res) {
  Meal.create(req.body._meals, function(err) {
    if (err) {
      return handleError(res, err);
    }
    const _meals = [];

    for (let i = 0; i < arguments[1].length; i++) {
      _meals.push(arguments[1][i]._id);
    }

    const _tiffinService = req.body;
    _tiffinService._meals = _meals;

    TiffinService.create(_tiffinService, function(err, tiffinService) {
      if (err) {
        return handleError(res, err);
      }

      tiffinService.populate();

      return res.json(201, tiffinService);
    });
  });
};

// Updates an existing restaurant in the DB.
exports.update = function(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  TiffinService.findById(req.params.id, function(err, tiffinService) {
    if (err) {
      return handleError(res, err);
    }
    if (!tiffinService) {
      return res.send(404);
    }
    const updated = _.merge(tiffinService, req.body);
    updated.save(function(err) {
      if (err) {
        return handleError(res, err);
      }

      return res.json(200, tiffinService);
    });
  });
};

// Deletes a restaurant from the DB.
exports.destroy = function(req, res) {
    TiffinService.findById(req.params.id, function(err, tiffinService) {
    if (err) {
      return handleError(res, err);
    }
    if (!tiffinService) {
      return res.send(404);
    }
    tiffinService.remove(function(err) {
      if (err) {
        return handleError(res, err);
      }
      return res.send(204);
    });
  });
};