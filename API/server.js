import express from "express";
import mongoose from "mongoose";
import bodyParser from "express";
import userRouter from './routes/user.js'
import recipeRouter from './routes/recipe.js'
import cors from 'cors'  
const app = express();

app.use(bodyParser.json());
app.use(
  cors({
    // origin: "http://localhost:5173",
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

mongoose
  .connect(
    // "mongodb+srv://codesnippet02:wmkmLXwqDiudkudy@cluster0.rwviswe.mongodb.net/",
    "mongodb+srv://sumanmalakar2022:G7VwOsxTULrhE9SR@volcanus.tkilonf.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "MERN_Recipe_App_2024",
    }
  )
  .then(() => console.log("MongoDB is Connected Successfully!"))
  .catch((err) => console.error(err.message ));

// UserRouter
app.use('/api',userRouter);

// RecipeRouter
app.use('/api',recipeRouter)

const port = 1000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

