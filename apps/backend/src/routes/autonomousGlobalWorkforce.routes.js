import express from "express";
import { regulateAIWorkforce } from "../services/autonomousGlobalWorkforceService.js";

// AI-driven self-regulating AI workforce API routes

const router = express.Router();

/**
 * @route GET /api/autonomous-global-workforce/regulate
 * @desc AI-driven workforce regulation & automation
 */
router.get("/regulate", async (req, res) => {
    try {
        const regulationStatus = await regulateAIWorkforce();
        res.json({ status: "Success", regulation: regulationStatus });
    } catch (error) {
        console.error("Error regulating AI workforce:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

export default router;
