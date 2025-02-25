import express from "express";
import { getClientTrustScore } from "../services/clientTrustScoreService.js";

// API to generate AI-powered client trust scores based on payment history, freelancer feedback, and dispute rates.

const router = express.Router();

/**
 * @route POST /api/client-trust-score/analyze
 * @desc Evaluates client trustworthiness using AI analysis
 */
router.post("/analyze", async (req, res) => {
    try {
        const result = await getClientTrustScore(req.body);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: "Error calculating client trust score" });
    }
});

export default router;
