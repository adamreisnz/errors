'use strict';

/**
 * Dependencies
 */
const ClientError = require('../client');

/**
 * Error class
 */
class BadRequestError extends ClientError {

  /**
   * Constructor
   */
  constructor(message, data) {

    //Default message
    message = message || 'Bad request';

    //Parent constructor
    super(message, data, 400);

    //Set data
    this.code = 'BAD_REQUEST';
  }
}

//Export
module.exports = BadRequestError;
