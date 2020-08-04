var express = require('express');
var router = express.Router();
var controller = require('./mealController');

router.param('id', controller.idParam);

router.route('/')
    .get(controller.get)
    .post(controller.post);

router.route('/:id')
    .get(controller.getByID)
    .put(controller.put)
    .delete(controller.delete);

module.exports = router;