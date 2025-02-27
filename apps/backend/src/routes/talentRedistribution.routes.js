import express from "express";
import { redistributeTalent } from "../services/talentRedistributionService.js";

// AI-driven internal talent mobility & workforce balancing

const router = express.Router();

/**
 * @route POST /api/talent-redistribution/optimize
 * @desc AI-driven workforce redistribution & internal mobility optimization
 */
router.post("/optimize", async (req, res) => {
  try {
    const { currentWorkforce, departmentProductivity, employeeOverload } = req.body;
    if (!currentWorkforce || !departmentProductivity || !employeeOverload) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const redistributionPlan = await redistributeTalent(currentWorkforce, departmentProductivity, employeeOverload);
    res.json(redistributionPlan);
  } catch (error) {
    console.error("Error in talent redistribution:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
