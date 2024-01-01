import { StatusCodes } from "http-status-codes";

// error check
export class NotFoundError extends Error{
    constructor(message) {
        super(message)
        this.name = 'NotFoundError';
        this.StatusCodes = StatusCodes.NOT_FOUND;
    }
}


export class BadRequestError extends Error{
    constructor(message) {
        super(message)
        this.name = 'BadRequestError';
        this.StatusCodes = StatusCodes.BAD_REQUEST;
    }
}


export class UnauthenticatedError extends Error{
    constructor(message) {
        super(message)
        this.name = 'UnauthenticatedError';
        this.StatusCodes = StatusCodes.UNAUTHORIZED;
    }
}



export class UnauthorizedError extends Error{
    constructor(message) {
        super(message)
        this.name = 'UnauthorizedError';
        this.StatusCodes = StatusCodes.FORBIDDEN;
    }
}

