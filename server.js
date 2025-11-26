import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import router from "./routes/candidates.js";
import visaRoutes from "./routes/visas.js";

dotenv.config();
connectDB();

//Midlewares
const app = express();
app.use(cors());
app.use(express.json());

//Routes
app.use("/api/candidates",router);
app.use("/api/visas",visaRoutes);
//TEST Routes
app.get('/',(req,res)=>{
  res.send("visa fixed");
})

//Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
  console.log(`server running on port ${PORT}`);
})
