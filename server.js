import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("DB Error:", err));

// Schema
const candidateSchema = new mongoose.Schema({
  name: String,
  passport: String,
  agent: String,
});

const Candidate = mongoose.model("Candidate", candidateSchema);

// Root
app.get("/", (req, res) => {
  res.send("Mongo Connected Candidate API Running!");
});

// GET all
app.get("/candidates", async (req, res) => {
  const data = await Candidate.find();
  res.json(data);
});

// POST
app.post("/candidates", async (req, res) => {
  const c = new Candidate(req.body);
  await c.save();
  res.json({ success: true, data: c });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Server running on", port));
