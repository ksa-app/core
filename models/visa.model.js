import mongoose from "mongoose";
const visaSchema = new mongoose.Schema({
    sl:{type:Number,required:true,unique:true,index:true},
    fullName:{type:String,required:true,trim:true,index:true},
    passportNumber:{type:String,required:true,unique:true,index:true},
    receivedDate:{type:Date,default:""},
    status:{type:String,enum:["JUST RECIEVED","MEDICAL","MOFA","VISA ISSUED","MANPOWER","FLIGHT","IQAMA","ON HOLD","BACK"],default:"JUST RECIEVED"},
    isDeleted:{type:Boolean,default:false},
    passportScanCopy:{type:String,unique:true},
},{timestamps:true});

export default mongoose.model("Visa", visaSchema);