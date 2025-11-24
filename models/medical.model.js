import mongoose from "mongoose";
const candidateSchema = new mongoose.Schema();


export default mongoose.model("Candidate",candidateSchema);