import express from "express";
import { getWorkforcePredictions } from "../services/workforceService.js";

const router = express.Router();

/**
 * Route to fetch workforce predictions from AI service.
 */
router.post("/predict", async (req, res) => {
  try {
    const { industry, region, skills } = req.body;
    const predictions = await getWorkforcePredictions(industry, region, skills);
    res.json(predictions);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving workforce insights." });
  }
});

// ✅ API Route: Get Internal Employee Mobility Data
router.get("/progression/:employeeId", async (req, res) => {
  try {
    const { employeeId } = req.params;
    const progressionData = await pool.query(
      "SELECT * FROM employee_mobility WHERE employee_id = $1",
      [employeeId],
    );
    res.json(progressionData.rows);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch employee progression." });
  }
});

export default router;
