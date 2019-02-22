'use strict';

/**
 * Base types
 */
exports.BaseError = require('./base');
exports.InternalError = require('./internal');
exports.ClientError = require('./client');
exports.ServerError = require('./server');

/**
 * Auth types
 */
exports.NotAuthenticatedError = require('./auth/not-authenticated');
exports.NotAuthorizedError = require('./auth/not-authorized');
exports.UserArchivedError = require('./auth/user-archived');
exports.UserPendingError = require('./auth/user-pending');
exports.UserSuspendedError = require('./auth/user-suspended');

/**
 * Client types
 */
exports.BadRequestError = require('./client/bad-request');
exports.ExistsError = require('./client/exists');
exports.ExpiredTokenError = require('./client/expired-token');
exports.FileTooLargeError = require('./client/file-too-large');
exports.InvalidDataError = require('./client/invalid-data');
exports.InvalidTokenError = require('./client/invalid-token');
exports.NotFoundError = require('./client/not-found');
exports.TooManyRequestsError = require('./client/too-many-requests');
exports.ValidationError = require('./client/validation');

/**
 * Server types
 */
exports.MailError = require('./server/mail');
exports.ServiceUnavailableError = require('./server/service-unavailable');
exports.GatewayTimeoutError = require('./server/gateway-timeout');
