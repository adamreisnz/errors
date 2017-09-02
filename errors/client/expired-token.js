'use strict';

/**
 * Dependencies
 */
const InvalidTokenError = require('./invalid-token');

/**
 * Error class
 */
class ExpiredTokenError extends InvalidTokenError {

  /**
   * Constructor
   */
  constructor(message) {

    //Default message
    message = message || 'Expired token';

    //Parent constructor
    super(message);

    //Set data
    this.code = 'EXPIRED_TOKEN';
  }
}

//Export
module.exports = ExpiredTokenError;
