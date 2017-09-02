'use strict';

/**
 * Dependencies
 */
const NotAuthenticatedError = require('./not-authenticated');

/**
 * Error class
 */
class UserArchivedError extends NotAuthenticatedError {

  /**
   * Constructor
   */
  constructor(message) {

    //Default message
    message = message || 'User archived';

    //Parent constructor
    super(message);

    //Set data
    this.code = 'USER_ARCHIVED';
  }
}

//Export
module.exports = UserArchivedError;
