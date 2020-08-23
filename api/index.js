const express = require('express');
const apiRouter = express.Router();
const ownerRouter = require('./owner/ownerRouter');
const userRouter = require('./user/userRouter');
const orderRouter = require('./order/orderRouter');



apiRouter.use('/orders/', orderRouter);
apiRouter.use('/owners/', ownerRouter);
apiRouter.use('/users/', userRouter);

module.exports = apiRouter;
