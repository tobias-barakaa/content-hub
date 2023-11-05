import { StatusCodes } from "http-status-codes";
import User from '../models/authModel.js';
import Content from '../models/articleModel.js';


export const getCurrentUser = async(req, res) => {
    const user = await User.findOne({_id: req.user.userId });
    const userWithoutPassword = user.toJSON();
    res.status(StatusCodes.OK).json({
        user: userWithoutPassword
    })
}

export const getApplicationStats = async(req, res) => {
    const users = await User.countDocuments()
    const articles = await Content.countDocuments();
    res.status(StatusCodes.OK).json({
        users,articles
    })
}

export const updateUser = async(req, res) => {
    const obj = {...req.body};
    delete obj.password
    const updatedUser = await User
    .findByIdAndUpdate(req.user.userId, obj);

    res.status(StatusCodes.OK).json({
        updatedUser
    })
}