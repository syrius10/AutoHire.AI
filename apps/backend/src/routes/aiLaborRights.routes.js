import express from "express";
import { monitorLaborRights } from "../services/aiLaborRightsService.js";

// AI-driven labor policy & AI ethics enforcement API routes

const router = express.Router();

/**
 * @route GET /api/ai-labor-rights/monitor
 * @desc AI-powered labor rights monitoring & ethics enforcement
 */
router.get("/monitor", async (req, res) => {
    try {
        const laborRightsStatus = await monitorLaborRights();
        res.json({ status: "Success", laborRights: laborRightsStatus });
    } catch (error) {
        console.error("Error monitoring AI labor rights:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

export default router;
