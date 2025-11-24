import express from "express";
import fs from "fs";

const app = express();
app.use(express.json());

// GET all candidates
app.get("/candidates", (req, res) => {
  const data = JSON.parse(fs.readFileSync("candidates.json"));
  res.json(data);
});

// ADD new candidate
app.post("/candidates", (req, res) => {
  const data = JSON.parse(fs.readFileSync("candidates.json"));
  const newCandidate = req.body;

  data.push(newCandidate);
  fs.writeFileSync("candidates.json", JSON.stringify(data, null, 2));

  res.json({ success: true, message: "Candidate Added", data: newCandidate });
});

// Root path
app.get("/", (req, res) => {
  res.send("this is reaz website for practice");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server is running on port", port);
});
