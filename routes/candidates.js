import express from "express";
import Candidate from "../models/Candidate.js";

const router = express.Router();

router.post('/',async (req,res)=>{
    try{
        const candiate = await Candidate.create(req.body);
        res.status(201).json(candiate);
    }catch(err){
        res.status(404).json({error:err.message});
    }
});
router.get('/',async(req,res)=>{
    try{
        const candidates = await Candidate.find();
        res.json(candidates);
    }catch(err){
        res.status(500).json({error:err.message})
    }
});
// router.get();
// router.put();
// router.delete();
export default router;
