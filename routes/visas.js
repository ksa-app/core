import express from 'express';
import Visa from '../models/Visa.js';

const router = express.Router();

router.post("/", async(req,res)=>{
    try{
        const visa = await Visa.create(req.body);
        res.json(visa);
    }catch(error){
        res.status(400).json({messege:error.messege});
    }
});
router.get("/",async(req,res)=>{
    const visas = await Visa.find();
    res.json(visas);
});
export default router;