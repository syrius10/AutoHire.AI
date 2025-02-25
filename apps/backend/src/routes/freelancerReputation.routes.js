import express from "express";
import { analyzeFreelancerReputation } from "../services/freelancerReputationService.js";

const router = express.Router();

router.post("/analyze", async (req, res) => {
    const result = await analyzeFreelancerReputation(req.body);
    res.json(result);
});

export default router;
