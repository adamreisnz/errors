'use strict';

/**
 * Dependencies
 */
const BadRequestError = require('./bad-request');

/**
 * Error class
 */
class FileTooLargeError extends BadRequestError {

  /**
   * Constructor
   */
  constructor(message, maxFileSize) {

    //Parameter juggling
    if (typeof message === 'number') {
      maxFileSize = message;
      message = '';
    }

    //Default message
    message = message || 'File too large';

    //Create data
    const data = maxFileSize ? {maxFileSize} : null;

    //Parent constructor
    super(message, data);

    //Set data
    this.code = 'FILE_TOO_LARGE';
    this.isTrivial = true;
  }
}

//Export
module.exports = FileTooLargeError;
