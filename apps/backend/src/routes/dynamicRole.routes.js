import express from "express";
import { optimizeJobRole } from "../services/dynamicRoleService.js";

const router = express.Router();

/**
 * @route POST /api/dynamic-role/optimize
 * @desc AI-powered job role optimization
 */
router.post("/optimize", async (req, res) => {
  try {
    const {
      employeeId,
      skills,
      performanceData,
      performance,
      experience,
      skillLevel,
      adaptability,
    } = req.body;

    // Ensure at least one set of parameters is provided
    if (
      !(employeeId && skills && performanceData) &&
      !(performance && experience && skillLevel && adaptability)
    ) {
      return res
        .status(400)
        .json({ error: "Missing required fields for role optimization" });
    }

    const roleSuggestion = await optimizeJobRole({
      employeeId,
      skills,
      performanceData,
      performance,
      experience,
      skillLevel,
      adaptability,
    });

    res.json(roleSuggestion);
  } catch (error) {
    console.error("Error optimizing job role:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
