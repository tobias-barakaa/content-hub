import mongoose from "mongoose";


const contentSchema = new mongoose.Schema({
    articleTitle: {
        type: String,
        enum: Object.values(ARTICLE_TYPE),
        default: "Article"
    },
    description: String,
    category: {
        type: String,
        enum: Object.values(ARTICLE_CATEGORY),
        default: "Uncertain"
    },
    numOfWords: Number,

    authorsTone: {
        type: String,
        enum: Object.values(AUTHORS_TONE),
        default: "Informative, Neutral"
    },

    keywords: String,
    articleType: {
        type: String,
        enum: Object.values(ARTICLE_TYPE),
        default: "Article"
    },

    publishing: {
        type: String,
        enum: Object.values(PUBLISH),
        default: "No"
    },
    
    quantity:{
        type: Number,
        enum: Object.values(QUANTITY)
    },
    frequency: {
        type: String,
        enum: Object.values(FREQUENCY),
        default: "Daily"
    }

}, {timestamps: true}
)


export default mongoose.model('Content', contentSchema);

