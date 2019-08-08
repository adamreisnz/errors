'use strict';

/**
 * Dependencies
 */
const NotAuthorizedError = require('./not-authorized');

/**
 * Error class
 */
class PlanExpiredError extends NotAuthorizedError {

  /**
   * Constructor
   */
  constructor(data) {

    //Parent constructor
    super(`Plan expired`, data);

    //Set data
    this.code = 'PLAN_EXPIRED';
  }
}

//Export
module.exports = PlanExpiredError;
