import express from "express";
import { automateHRProcess } from "../services/aiHRManagementService.js";

// AI-powered HR process automation API

const router = express.Router();

/**
 * @route POST /api/ai-hr-management/automate
 * @desc AI-driven HR process automation
 */
router.post("/automate", async (req, res) => {
  try {
    const task = await automateHRProcess();
    res.json({ task });
  } catch (error) {
    console.error("Error in HR automation:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
