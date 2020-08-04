var logger = require('../common/logger');

module.exports = function(err, res, req, next){
    logger.error(err);
    if(err == "Not Found"){
        res.status(404);
        res.send("The Resource is not available");
    }
    else{
        res.status(500);
        res.send("OOPS! sorry for inconvinience");
    }
};