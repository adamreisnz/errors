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
  constructor(message) {

    //Default message
    message = message || 'Mail error';

    //Parent constructor
    super(message);

    //Set data
    this.code = 'MAIL_ERROR';
  }
}

//Export
module.exports = MailError;
