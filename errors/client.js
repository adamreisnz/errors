'use strict';

/**
 * Dependencies
 */
const BaseError = require('./base');

/**
 * Error class
 */
class ClientError extends BaseError {

  /**
   * Constructor
   */
  constructor(message, data, status) {

    //Check if status given as data
    if (data && typeof data === 'number') {
      status = data;
      data = null;
    }

    //Check if status valid
    if (status < 400 || status > 499) {
      status = 400;
    }

    //Default message
    message = message || 'Client error';

    //Parent constructor
    super(message, data, status);
  }
}

//Export
module.exports = ClientError;
