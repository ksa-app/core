import express from "express";
import Candidate from "../models/Candidate.js";

const router = express.Router();

// CREATE Canidate
router.post('/',async(req,res)=>{
    try{
        const candidate = await Candidate.create(req.body);
        res.status(201).json(candidate);
    }catch(err){
        res.status(400).json({error:err.message});
    }
});
//REAZ Candidate

router.get('/',async(req,res)=>{
    try{
        const candidates = await Candidate.find();
        res.json(candidates)
    }catch(err){
        res.status(500).json({error:err.message});
    }
});
export default router;