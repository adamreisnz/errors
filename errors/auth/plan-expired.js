'use strict';

/**
 * Dependencies
 */
const NotAuthenticatedError = require('./not-authenticated');

/**
 * Error class
 */
class PlanExpiredError extends NotAuthenticatedError {

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
