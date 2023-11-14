import mongoose from "mongoose";


const contentSchema = new mongoose.Schema(
 
  {
    description: String,
    keywords: String,
    numOfWords: Number,
    numberOfArticles: Number,
    duration: String,
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
