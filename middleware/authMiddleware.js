import { BadRequestError, UnauthenticatedError, UnauthorizedError } from "../errors/customErrors.js";
import { verifyJWT } from "../utils/tokenUtils.js";

export const authenticateUser = (req, res, next) => {
    const {token} = req.cookies
    if (!token) throw new UnauthenticatedError('authentication invalid')

    try {
        const {userId, role} = verifyJWT(token);
        const testUser = userId === '6558c8464e65f3c5914906fc';
        req.user = {userId, role, testUser}

     next();
        
    } catch (error) {
        throw new UnauthenticatedError('authentication invalid')
        
    }
}


export const authorizePermissions = (...roles) => {
  return (req, res, next) => {
  if(!roles.includes(req.user.role)) {
    throw new UnauthorizedError('Unauthorized to acces this page')
  }
    next();

  }
      
}

export const checkForTestUser = (req, res, next) => {
  if(req.user.testUser) throw new BadRequestError('test user cannot perform this action')
  next();
}