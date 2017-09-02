'use strict';

/**
 * Dependencies
 */
const NotAuthenticatedError = require('./not-authenticated');

/**
 * Error class
 */
class UserSuspendedError extends NotAuthenticatedError {

  /**
   * Constructor
   */
  constructor(message) {

    //Default message
    message = message || 'User suspended';

    //Parent constructor
    super(message);

    //Set data
    this.code = 'USER_SUSPENDED';
  }
}

//Export
module.exports = UserSuspendedError;
