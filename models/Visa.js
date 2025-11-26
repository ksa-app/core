import mongoose from "mongoose";
const visaSchema = new mongoose.Schema({
    candidate:{type:mongoose.Schema.Types.ObjectId,ref:"Candidate",required:true},
    issueDate:{type:Date},
    expiryDate:{type:Date},
    status:{type:String, enum:["ISSUDE","SOLD","EXPIRED","CANCEL"],default:"ISSUDE"},
},{timestamps:true});


export default mongoose.model("Visa",visaSchema);