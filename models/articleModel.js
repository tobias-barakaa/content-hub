import mongoose from "mongoose";
import { DURATION } from '../utils/constants.js';



const contentSchema = new mongoose.Schema(
 
  {
    description: String,
    keywords: String,
    numOfWords: Number,
    numberOfArticles: Number,
    duration: String,
    duration: {
      type: String,
      enum: Object.values(DURATION),
      default: DURATION.DAY1
    },
    totalCost: String,
    title: String,
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User'
    }
  },
  { timestamps: true }
);

export default mongoose.model("Content", contentSchema);
