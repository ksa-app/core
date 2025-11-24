import dotenv from "dotenv";
import connectDB from "./config/db.js";
import express from "express";
import cors from "cors";
dotenv.config();
connectDB();
const app = express();
app.use(cors());
app.use(express.json());


app.get('/',(req,res)=>{
  res.send("candiate appi ");
})
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
  console.log(`server running on port ${PORT}`);
})
