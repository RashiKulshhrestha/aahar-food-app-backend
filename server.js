var express = require('express');
var app = express();
var setupMiddleware = require('./middleware/commonMiddleware');
var errorHandler = require('./middleware/errorHandler');
var apiRouter = require('./api/index');

setupMiddleware(app);

app.use('/api/', apiRouter);

app.use(errorHandler);

module.exports = app;