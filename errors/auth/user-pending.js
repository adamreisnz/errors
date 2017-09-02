'use strict';

/**
 * Dependencies
 */
const NotAuthenticatedError = require('./not-authenticated');

/**
 * Error class
 */
class UserPendingError extends NotAuthenticatedError {

  /**
   * Constructor
   */
  constructor(message) {

    //Default message
    message = message || 'User pending approval';

    //Parent constructor
    super(message);

    //Set data
    this.code = 'USER_PENDING';
  }
}

//Export
module.exports = UserPendingError;
