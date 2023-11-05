import Content from "../models/articleModel.js";
import { StatusCodes } from "http-status-codes";
import User from "../models/authModel.js";
// import mongoose from "mongoose";
// import day from "dayjs";

export const getAllArticles = async (req, res) => {
  const article = await Content.find({createdBy: req.user.userId });
  res.status(StatusCodes.OK).json({article})

}

export const getArticles = async (req, res) => {
  const article = await Content.find(User.role === 'admin');
  res.status(StatusCodes.OK).json({article})

}




export const createArticle = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const content = await Content.create(req.body);
  res.status(StatusCodes.CREATED).json({ content });
};

// { 
//   "email": "tobby@gmail.com",
//   "name": "tobias",
//    "password": "secret123",
//    "lastName": "barak"
//   }

export const getArticle = async (req, res) => {
  const article = await Content.findById(req.params.id);
  res.status(StatusCodes.OK).json({ article });
};

export const deleteArticle = async (req, res) => {
  const removeArticle = await Content.findByIdAndDelete(req.params.id, {
    new: true,
  });
  res
    .status(StatusCodes.OK)
    .json({ msg: "Article deleted", article: removeArticle });
};

export const updateArticle = async (req, res) => {
  const updatedArticle = await Content.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(StatusCodes.OK).json({ article: updatedArticle, msg: "updated" });
};
