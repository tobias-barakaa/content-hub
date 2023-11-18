import { StatusCodes } from "http-status-codes";
import User from '../models/authModel.js';
import Content from '../models/articleModel.js';
import cloudinary from 'cloudinary';
import {promises as fs} from 'fs';
import { format } from "path";
import { formatImage } from "../middleware/multerMiddleware.js";


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
    const newUser = {...req.body};
    delete newUser.password;
    delete newUser.role;

    if(req.file ) {
        const file = formatImage(req.file)
        const response = await cloudinary.v2.uploader.upload(file);
        newUser.avatar = response.secure_url
        newUser.avatarPublicId = response.public_id

    }
    const updatedUser = await User.findByIdAndUpdate(req.user.userId, newUser);
    if(req.file && updatedUser.avatarPublicId) {
        await cloudinary.v2.uploader.destroy(updatedUser.avatarPublicId);
    }
    
    res.status(StatusCodes.OK).json({ updatedUser})
}

