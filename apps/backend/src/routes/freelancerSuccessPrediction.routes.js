import express from "express";
import { predictFreelancerSuccess } from "../services/freelancerSuccessPredictionService.js";

// Predicts freelancer performance

const router = express.Router();

router.post("/predict", async (req, res) => {
    const prediction = await predictFreelancerSuccess(req.body);
    res.json(prediction);
});

export default router;
