import mongoose from "mongoose";
const visaSchema = new mongoose.Schema();

export default mongoose.model("Visa", visaSchema);