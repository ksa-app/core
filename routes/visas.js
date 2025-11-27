import express from 'express';
import Visa from '../models/Visa.js';

const router = express.Router();

// CREATE VISA
router.post("/", async (req, res) => {
    try {
        // Insert only candidate ID + dates
        const visa = await Visa.create({
            candidate: req.body.candidate,
            issueDate: req.body.issueDate,
            expiryDate: req.body.expiryDate,
            status: req.body.status
        });

        // Update candidate status
        await Candidate.findByIdAndUpdate(req.body.candidate, {
            status: "VISA ISSUED",
            visaId: visa._id
        });

        res.json(visa);
<<<<<<< HEAD

    } catch (error) {
        res.status(400).json({ message: error.message });
=======
    }catch(error){
        res.status(400).json({messege:error.messege});
>>>>>>> parent of 9737fb7 (ok)
    }
});

// GET ALL VISAS
router.get("/", async (req, res) => {
    const visas = await Visa.find().populate("candidate");
    res.json(visas);
});

export default router;
