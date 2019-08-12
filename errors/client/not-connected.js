'use strict';

/**
 * Dependencies
 */
const ClientError = require('../client');

/**
 * Error class
 */
class NotConnectedError extends ClientError {

  /**
   * Constructor
   */
  constructor(message, data) {

    //Default message
    message = message || 'Not Connected';

    //Parent constructor
    super(message, data, 400);

    //Set data
    this.code = 'NOT_CONNECTED';
    this.isTrivial = true;
  }
}

//Export
module.exports = NotConnectedError;
