import express from "express";
import { evaluateAIHiring } from "../services/aiOnlyManagementService.js";

// AI-powered AI-only hiring, workforce management & business operations.

const router = express.Router();

/**
 * @route POST /api/ai-only-management/hiring
 * @desc AI-driven hiring decision-making
 */
router.post("/hiring", async (req, res) => {
    try {
        const { skillMatchPercentage } = req.body;

        if (skillMatchPercentage === undefined) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const hiringDecision = await evaluateAIHiring(skillMatchPercentage);
        res.json({ hiringDecision });
    } catch (error) {
        console.error("Error in AI-only hiring:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

export default router;
