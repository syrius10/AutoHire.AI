import express from "express";
import { validateReviews } from "../services/reviewValidationService.js";

// API to detect fake/manipulated freelancer reviews.

const router = express.Router();

/**
 * @route POST /api/review-validation/analyze
 * @desc Detects fake/manipulated reviews using AI
 */
router.post("/analyze", async (req, res) => {
    try {
        const result = await validateReviews(req.body);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: "Error analyzing reviews" });
    }
});

export default router;
