import express from "express";
import { getWorkforcePlan } from "../services/enterpriseWorkforceService.js";

// AI-powered enterprise HR planning

const router = express.Router();

/**
 * @route POST /api/enterprise-workforce/plan
 * @desc AI-driven enterprise workforce planning
 */
router.post("/plan", async (req, res) => {
  try {
    const { departmentSize, revenueGrowth, attritionRate } = req.body;
    if (!departmentSize || !revenueGrowth || !attritionRate) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const workforcePlan = await getWorkforcePlan(departmentSize, revenueGrowth, attritionRate);
    res.json(workforcePlan);
  } catch (error) {
    console.error("Error in workforce planning:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
