const express = require('express');
const app = express();
const mongoose =  require('mongoose');
const dotenv = require('dotenv')

const authRouter = require('./routes/auth')
const userRouter = require("./routes/users");

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
app.use(express.json())

app.use('/api/auth',authRouter)
app.use("/api/users", userRouter);


app.listen(process.env.PORT||3000,()=>{
    connectDB()
    console.log(`app is running on port ${process.env.PORT}` );
})