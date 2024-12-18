import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();
mongoose.connect("mongodb://127.0.0.1:27017/MERN_CRUD", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on("error", (error)=>console.log(error));
db.once("open", ()=> console.log("Database Connected"))

app.use(cors());
app.use(express.json());

// route
app.use(UserRoute)




app.listen(5080, ()=> console.log("server is running"))