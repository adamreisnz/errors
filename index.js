/* eslint-disable max-len */

//Base classes
export {default as BaseError} from './errors/base.js'
export {default as InternalError} from './errors/internal.js'
export {default as ClientError} from './errors/client.js'
export {default as ServerError} from './errors/server.js'

//Client errors
export {default as BadRequestError} from './errors/client/bad-request.js'
export {default as ExistsError} from './errors/client/exists.js'
export {default as ExpiredTokenError} from './errors/client/expired-token.js'
export {default as FileTooLargeError} from './errors/client/file-too-large.js'
export {default as InvalidDataError} from './errors/client/invalid-data.js'
export {default as InvalidTokenError} from './errors/client/invalid-token.js'
export {default as NotAuthenticatedError} from './errors/client/not-authenticated.js'
export {default as NotAuthorizedError} from './errors/client/not-authorized.js'
export {default as NotConnectedError} from './errors/client/not-connected.js'
export {default as NotFoundError} from './errors/client/not-found.js'
export {default as NotValidatedError} from './errors/client/not-validated.js'
export {default as TooManyRequestsError} from './errors/client/too-many-requests.js'

//Server errors
export {default as ServiceUnavailableError} from './errors/server/service-unavailable.js'
export {default as GatewayTimeoutError} from './errors/server/gateway-timeout.js'
