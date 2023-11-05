import mongoose from "mongoose";
import {
  ARTICLE_CATEGORY,
  ARTICLE_TYPE,
  AUTHORS_TONE,
  FREQUENCY_SUB,
  PUBLISH,
  QUANTITY,
} from "../utils/constants.js";

const contentSchema = new mongoose.Schema(
  {
    description: String,
    testimonial: String,
    keywords: String,
    numOfWords: Number,

    category: {
      type: String,
      enum: Object.values(ARTICLE_CATEGORY),
      default: ARTICLE_CATEGORY.UNCERTAIN
    },

    authorsTone: {
      type: String,
      enum: Object.values(AUTHORS_TONE),
      default: AUTHORS_TONE.NEUTRAL
    },

    articleType: {
      type: String,
      enum: Object.values(ARTICLE_TYPE),
      default: ARTICLE_TYPE.ARTICLE,
    },

    publishing: {
      type: String,
      enum: Object.values(PUBLISH),
      default: PUBLISH.NO
    },

    quantity: {
      type: Number,
      enum: Object.values(QUANTITY),
      default: 45
    },
    frequency: {
      type: String,
      enum: Object.values(FREQUENCY_SUB),
      default: FREQUENCY_SUB.DAILY,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User'
    }
  },
  { timestamps: true }
);

export default mongoose.model("Content", contentSchema);
