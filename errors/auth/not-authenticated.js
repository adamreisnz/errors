'use strict';

/**
 * Dependencies
 */
const ClientError = require('../client');

/**
 * Error class
 */
class NotAuthenticatedError extends ClientError {

  /**
   * Constructor
   */
  constructor(message) {

    //Default message
    message = message || 'Not authorized';

    //Parent constructor
    super(message, 401);

    //Set data
    this.code = 'NOT_AUTHENTICATED';
    this.isTrivial = true;
  }
}

//Export
module.exports = NotAuthenticatedError;
