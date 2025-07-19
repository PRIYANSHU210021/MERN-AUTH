import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";

import connectDB from "./config/db.js";
import authRouter from "./routes/authRoutes.js"
import userRouter from "./routes/userRoutes.js";

const app = express();

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for form data
app.use(cookieParser());

app.use(cors({
  origin: 'http://localhost:5173', // Your frontend URL
  credentials: true, // Required for cookies
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.get('/ping',(req,res)=>{
    res.send("ponggo");
})

app.use('/api/auth',authRouter)
app.use('/api/user',userRouter)

const PORT = process.env.PORT || 8080;
connectDB();


app.listen(PORT, ()=>{
    console.log(`Listening At ${PORT}`)
})


