import express from "express";
import { simulateEmployeeTwin } from "../services/employeeDigitalTwinService.js";

// AI-powered Employee Digital Twin Simulation

const router = express.Router();

/**
 * @route POST /api/employee-digital-twin/simulate
 * @desc AI-powered employee digital twin simulation for workforce modeling.
 */
router.post("/simulate", async (req, res) => {
  try {
    const { employeeId, experience, skillLevel, performanceScore } = req.body;

    if (!employeeId || !experience || !skillLevel || !performanceScore) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const simulation = await simulateEmployeeTwin(employeeId, experience, skillLevel, performanceScore);
    res.json(simulation);
  } catch (error) {
    console.error("Error in employee digital twin simulation:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
