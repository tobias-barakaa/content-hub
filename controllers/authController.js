import { StatusCodes } from "http-status-codes"
import User from '../models/authModel.js';
import { comparedPassword, hashPassword } from '../utils/passwordUtils.js'
import { UnauthenticatedError } from "../errors/customErrors.js";
import { createJWT } from "../utils/tokenUtils.js";

export const register = async(req, res) => {
    const isFirstAccount = (await User.countDocuments()) === 0
    req.body.role = isFirstAccount? 'admin' : 'user';
    const hashedPassword = await hashPassword(req.body.password)
     req.body.password = hashedPassword
    const user = await User.create(req.body);
    res.status(StatusCodes.CREATED).json({msg: "user created", user: user})
}


export const login = async(req, res) => {
    const user = await User.findOne({email: req.body.email});
    const isValidUser = 
    user && (await comparedPassword(req.body.password, user.password));
    if(!isValidUser) throw new UnauthenticatedError("no user found");
    const token = createJWT({userId: user._id, role: user.role});
    const oneDay = 1000 * 60 * 60 * 24
    res.cookie('token', token, {
        httpOnly: true,
        expires: new Date(Date.now() + oneDay),
        secure: process.env.NODE_ENV === 'production'
    })
    res.status(StatusCodes.OK).json({msg: "user logged in"})

}


export const logout = (req, res) => {
    res.cookie('token', 'logout', {
        httpOnly: true,
        expires: new Date(Date.now())
    })
    res.status(StatusCodes.OK).json({msg: "user logged out!"})
}