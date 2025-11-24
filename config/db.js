import mongoose from "mongoose";

const connectDB = async () => {
    try{
        const uri = process.env.MONGO_URI;
        if(!uri){
            throw new Error("MONGO_URI not found in .env file!");
        }
        const conn = await mongoose.connect(uri,{
            connectTimeoutMS: 20000,
        });
        console.log(`MongoDB connceted: ${conn.connection.host}`);
    }catch(err){
        console.error("Database Connection Failed: ",error.message);
        process.exit(1);
    }
};

export default connectDB;