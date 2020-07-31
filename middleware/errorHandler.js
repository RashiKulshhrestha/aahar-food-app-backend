var logger = require('../common/logger');

module.exports = function(err, res, req, next){
    logger.error(err);
    res.status(500);
    res.send("OOPS! sorry for inconvinience");
};