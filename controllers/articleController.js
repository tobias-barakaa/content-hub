import Content from "../models/articleModel.js";
import { StatusCodes } from "http-status-codes";
import User from "../models/authModel.js";
import { query } from "express";
// import mongoose from "mongoose";
// import day from "dayjs";

export const getAllArticles = async (req, res) => {
  const {search,sort} = req.query;


  const queryObject = {
    createdBy: req.user.userId,
  }

  if(search) {
    queryObject.$or = [
      {description:{$regex: search, $options: 'i'}},
      {keywords:{$regex: search, $options: 'i'}},
      {title:{$regex: search, $options: 'i'}},

    ]
  }



 const sortOptions = {
  newest: '-createdAt',
  oldest: 'createdAt',
  'a-z': 'title',
  'z-a': '-title',
 }

const sortKey = sortOptions[sort] || sortOptions.newest;

// pagination



const page = Number(req.query.page) || 1;
const limit = Number(req.query.limit) || 10;
const skip = (page - 1) * limit;







  const article = await Content.find(queryObject).sort(sortKey).skip(skip)
  .limit(limit);


  const totalArticles = await Content.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalArticles / limit);


  res.status(StatusCodes.OK).json({totalArticles,numOfPages,currentPage: page, article})

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
