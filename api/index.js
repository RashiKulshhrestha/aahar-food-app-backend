var express = require('express');
var mealRouter = require('./meal/mealRouter');
var orderRouter = require('./order/orderRouter');
var tiffinServiceRouter = require('./tiffinService/tiffinServiceRouter');
var userRouter = require('./user/userRouter');

var apiRouter = express.Router();

apiRouter.use('/meals/', mealRouter);
apiRouter.use('/orders/', orderRouter);
apiRouter.use('/tiffin-services/', tiffinServiceRouter);
apiRouter.use('/users/', userRouter);

module.exports = (apiRouter);
