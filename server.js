import 'express-async-errors';

import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import morgan from 'morgan';
const app = express();
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';



app.use(express.json());
app.use(cookieParser())

// routers;
import articleRouter from './routes/articleRouter.js';
import authRouter from './routes/authRouter.js'
import userRouter from './routes/userRouter.js'


// middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';
import {authenticateUser} from './middleware/authMiddleware.js';


if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));

}



app.use('/api/v1/articles',authenticateUser, articleRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', authenticateUser, userRouter);





app.use("*", (req, res) => {
    res.status(404).send("not found")
})

app.use(errorHandlerMiddleware);


const port = 4000 || process.env.PORT

try {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(4000, () => {
        console.log(`server running on port ${port}`)
    })

} catch (error) {
    console.log(error);
    process.exit(1);
}