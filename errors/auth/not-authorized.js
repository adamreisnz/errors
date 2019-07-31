'use strict';

/**
 * Dependencies
 */
const ClientError = require('../client');

/**
 * Error class
 */
class NotAuthorizedError extends ClientError {

  /**
   * Constructor
   */
  constructor(message, data = null) {

    //Default message
    message = message || 'Not authorized';

    //Parent constructor
    super(message, data, 403);

    //Set data
    this.code = 'NOT_AUTHORIZED';
    this.isTrivial = true;
  }
}

//Export
module.exports = NotAuthorizedError;
