var _ = require('lodash');

var config = {};

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
config.env = process.env.NODE_ENV;

var environmentConfig = require('./config.'+ config.env);

module.exports = _.merge(config, environmentConfig);