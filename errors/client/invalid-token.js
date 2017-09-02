'use strict';

/**
 * Dependencies
 */
const ClientError = require('../client');

/**
 * Error class
 */
class InvalidTokenError extends ClientError {

  /**
   * Constructor
   */
  constructor(message) {

    //Default message
    message = message || 'Invalid token';

    //Parent constructor
    super(message);

    //Set data
    this.code = 'INVALID_TOKEN';
    this.isTrivial = true;
  }
}

//Export
module.exports = InvalidTokenError;
