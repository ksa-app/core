import express from 'express';
import Visa from '../models/Visa.js';
import Candidate from '../models/Candidate.js';
const router = express.Router();

router.post("/", async(req,res)=>{
    try{
        const visa = await Visa.create(req.body);
        res.json(visa);
        await Candidate.findByIdAndUpdate(
            req.body.candidate,{
                status:"VISA ISSUED",
                visaId:visa._id
            }
        );
    }catch(error){
        res.status(400).json({messege:error.messege});
    }
});
router.get("/",async(req,res)=>{
    const visas = await Visa.find().populate("candidate");
    res.json(visas);
});
export default router;