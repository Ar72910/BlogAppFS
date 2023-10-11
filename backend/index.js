const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/users");
const postRouter = require("./routes/posts");
const commentRouter = require("./routes/comments");
const cors = require("cors");

// ,{
//         useNewUrlParser:true,
//         useUnifiedTopology:true,
//     })
//     .then(console.log("DB Connected Successfully ok ok"))
//     .catch((err)=>{
//         console.log("DB Facing Connection Issues");
//         console.log(err);
//         process.exit(1);
//     })
// database
const connectDB = async () => {
  try {
    console.log("Hi under  CONNECTdb");

    mongoose
      .connect("mongodb+srv://araj30577:123Anayayush@cluster0.e6szpmk.mongodb.net/blog?retryWrites=true&w=majority&appName=AtlasApp", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(console.log("DB Connected Successfully ok ok"))
      .catch((err) => {
        console.log("DB Facing Connection Issues");
        console.log(err);
        process.exit(1);
      });
  } catch (err) {
    console.log("yhe pr q aa rhe hoo db connect nahi hoo rha aache sei  ");
  }
};

// middlewares
dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/comments", commentRouter);

app.listen(process.env.PORT || 3000, () => {
  connectDB();
  console.log(`app is running on port ${process.env.PORT}`);
});
