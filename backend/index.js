const express = require('express');
const app = express();
const mongoose =  require('mongoose');
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/auth')
const userRouter =   require("./routes/users");
const postRouter = require("./routes/posts");
const commentRouter = require('./routes/comments');
const cors = require("cors");

// database
const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Db is connected successfully!');

    }

    catch(err){

    }

}

// middlewares
dotenv.config();
app.use(express.json());
app.use(cookieParser())
app.use(cors({origin:"http://localhost:5173", credentials:true}))


app.use('/api/auth',authRouter)
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/comments", commentRouter);


app.listen(process.env.PORT||3000,()=>{
    connectDB()
    console.log(`app is running on port ${process.env.PORT}` );
})