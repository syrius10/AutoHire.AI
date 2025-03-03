import express from "express";
import { getWorkforcePolicy } from "../services/aiWorkforcePolicyService.js";

// ✅ Get workforce policy recommendation

const router = express.Router();

router.post("/recommend", async (req, res) => {
    try {
        const { industryType, automationLevel, complianceScore } = req.body;
        if (!industryType || !automationLevel || !complianceScore) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const policyRecommendation = await getWorkforcePolicy(industryType, automationLevel, complianceScore);
        res.json({ policyRecommendation });
    } catch (error) {
        console.error("Error in workforce policy recommendation:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

export default router;
