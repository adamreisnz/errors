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
  constructor(message, data = null) {

    //Default message
    message = message || 'Not authenticated';

    //Parent constructor
    super(message, data, 401);

    //Set data
    this.code = 'NOT_AUTHENTICATED';
    this.isTrivial = true;
  }
}

//Export
module.exports = NotAuthenticatedError;
