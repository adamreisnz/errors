'use strict';

/**
 * Dependencies
 */
const ServerError = require('../server');

/**
 * Error class
 */
class MailError extends ServerError {

  /**
   * Constructor
   */
  constructor(message, data, status) {

    //Default message
    message = message || 'Mail error';

    //Parent constructor
    super(message, data, status);

    //Set data
    this.code = 'MAIL_ERROR';
  }
}

//Export
module.exports = MailError;
