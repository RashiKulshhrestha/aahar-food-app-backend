var config = require('./config/config');
var logger = require('./common/logger');
var app = require('./server');

app.listen(config.PORT);
logger.log("Application has started on "+ config.PORT);