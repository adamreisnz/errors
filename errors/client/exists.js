'use strict';

/**
 * Dependencies
 */
const ClientError = require('../client');

/**
 * Error class
 */
class ExistsError extends ClientError {

  /**
   * Constructor
   */
  constructor(message, data) {

    //Default message
    message = message || 'Already exists';

    //Parent constructor
    super(message, data, 409);

    //Set data
    this.code = 'EXISTS';
    this.isTrivial = true;
  }
}

//Export
module.exports = ExistsError;
