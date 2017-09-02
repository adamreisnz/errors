'use strict';

/**
 * Dependencies
 */
const ClientError = require('../client');

/**
 * Error class
 */
class NotFoundError extends ClientError {

  /**
   * Constructor
   */
  constructor(message, data) {

    //Default message
    message = message || 'Not found';

    //Parent constructor
    super(message, data, 404);

    //Set data
    this.code = 'NOT_FOUND';
    this.isTrivial = true;
  }
}

//Export
module.exports = NotFoundError;
