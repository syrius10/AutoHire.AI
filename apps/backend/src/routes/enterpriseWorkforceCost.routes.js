import express from "express";
import { getCostForecast } from "../services/enterpriseWorkforceCostService.js";

// Handles AI-driven workforce cost forecasting.

const router = express.Router();

/**
 * @route GET /api/enterprise-workforce-cost/forecast
 * @desc Fetch workforce hiring cost & budget predictions
 * @access Public
 */
router.get("/forecast", async (req, res) => {
  try {
    const result = await getCostForecast();
    res.json(result);
  } catch (error) {
    console.error("Error fetching workforce cost forecast:", error);
    res.status(500).json({ error: "Failed to retrieve cost predictions." });
  }
});

export default router;
