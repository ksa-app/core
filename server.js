import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import router from "./routes/candidates.js";

dotenv.config();
connectDB();

//Midlewares
const app = express();
app.use(cors());
app.use(express.json());

//Routes
app.use("/api/canidates",router);

//TEST Routes
app.get('/',(req,res)=>{
  res.send("candiate appi ");
})

//Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
  console.log(`server running on port ${PORT}`);
})
