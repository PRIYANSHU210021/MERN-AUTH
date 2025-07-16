import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import authRouter from "./routes/authRoutes.js"

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({credentials:true}));

app.get('/ping',(req,res)=>{
    res.send("ponggo");
})

app.use('/api/auth',authRouter)

const PORT = process.env.PORT || 8080;
connectDB();

app.listen(PORT, ()=>{
    console.log(`Listening At ${PORT}`)
})


