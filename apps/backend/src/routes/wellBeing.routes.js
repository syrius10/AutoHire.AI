import express from "express";
import { getWellBeingPlan } from "../services/wellBeingService.js";

// Fetches AI-driven personalized employee well-being plans

const router = express.Router();

/**
 * @route POST /api/well-being
 * @desc Fetch AI-driven well-being recommendations for employees
 */
router.post("/", async (req, res) => {
  try {
    const { workHours, workload, jobSatisfaction, stressLevel } = req.body;
    if (!workHours || !workload || !jobSatisfaction || !stressLevel) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const recommendations = await getWellBeingPlan(workHours, workload, jobSatisfaction, stressLevel);
    res.json(recommendations);
  } catch (error) {
    console.error("Error fetching well-being plan:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
