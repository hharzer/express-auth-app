const utils = require('./utils');
const googleStrategy = require('./strategies/google');
const cognitoStrategy = require('./strategies/cognito');

const pipe = (...functions) => args => functions.reduce((arg, fn) => fn(arg), args);

module.exports = utils;
module.exports.initialiseAuthentication = app => {
  utils.setup();

  pipe(googleStrategy, cognitoStrategy)(app);
};

module.exports.strategies = {
  googleStrategy,
  cognitoStrategy
};
