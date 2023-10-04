const express = require('express');
const app = express();
const mongoose =  require('mongoose');
const dotenv = require('dotenv')




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


app.listen(process.env.PORT||3000,()=>{
    connectDB()
    console.log(`app is running on port ${process.env.PORT}` );
})