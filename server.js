const express = require('express');
const app = express();
let config = require('./config/config');
let setupMiddleware = require('./middleware/commonMiddleware');
let errorHandler = require('./middleware/errorHandler');
let apiRouter = require('./api/index');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/food-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB connection gets successfully established.");
}) 

setupMiddleware(app);

app.use('/api/', apiRouter);

app.use(errorHandler);

module.exports = app;