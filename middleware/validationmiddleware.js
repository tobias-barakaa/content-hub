import { validationResult, body, param } from "express-validator";
import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} from "../errors/customErrors.js";
import mongoose from "mongoose";
import Content from "../models/articleModel.js";
import User from "../models/authModel.js";

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);

        if (errorMessages[0].startsWith("no job")) {
          throw new NotFoundError("not found");
        }
        if (errorMessages[0].startsWith("not authorized")) {
          throw new UnauthorizedError("not authorized to acces this route");
        }
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

export const validateTest = withValidationErrors([
  body("name")
    .notEmpty()
    .withMessage("name is required")
    .isLength({ min: 50 })
    .withMessage("name must be at least 50"),
]);

export const validateArticleInput = withValidationErrors([
  body("description").notEmpty().withMessage("Description is required"),
  body("keywords").notEmpty().withMessage("keywords is required"),
  body("numOfWords").notEmpty().withMessage("number of words is required"),
  body("numberOfArticles").notEmpty().withMessage("number of articles is required"),
  body("duration").notEmpty().withMessage("duration is required"),
  body("totalCost").notEmpty().withMessage("total cost is required"),
  body("title").notEmpty().withMessage("title is required"),
]);


export const validateIdParam = withValidationErrors([
  param("id").custom(async (value, { req }) => {
    const isValidId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidId) throw new Error("Invalid Mongodb ID");
    const article = await Content.findById(value);
    if (!article) {
      throw new NotFoundError(`No article with ${value} found`);
    }
    const isAdmin = req.user.role == "admin";
    const isOwner = req.user.userId === article.createdBy.toString();
    if (!isAdmin && !isOwner)
      throw new UnauthorizedError("not authorized to acces this route");
  }),
]);

export const validateRegisterInput = withValidationErrors([
  body("name").notEmpty().withMessage("name's required"),
  body("email")
    .notEmpty()
    .withMessage("email's required")
    .isEmail()
    .withMessage("invalid email format")
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) {
        throw new BadRequestError("email already exists");
      }
    }),
  body("password")
    .notEmpty()
    .withMessage("password's required")
    .isLength({
      min: 4,
    })
    .withMessage("password what be atleast 8 characters long"),
  body("lastName").notEmpty().withMessage("last name is required"),
]);

export const validateLoginInput = withValidationErrors([
  body("email")
    .notEmpty()
    .withMessage("email's required")
    .isEmail()
    .withMessage("invalid email format"),
  body("password").notEmpty().withMessage("password's required"),
]);

export const validateUpdateUserInput = withValidationErrors([
  body("name").notEmpty().withMessage("name's required"),
  body("email")
    .notEmpty()
    .withMessage("email's required")
    .isEmail()
    .withMessage("invalid email format")
    .custom(async (email, {req}) => {
      const user = await User.findOne({ email });
      if (user && user._id.toString() !== req.user.userId) {
        throw new BadRequestError("email already exists");
      }
    }),
  body("lastName").notEmpty().withMessage("last name is required"),
]);


