import express from "express";
import { optimizeRole } from "../services/dynamicRoleService.js";

// AI-driven role optimization

const router = express.Router();

/**
 * @route POST /api/dynamic-role/optimize
 * @desc AI-driven role optimization for employees
 */
router.post("/optimize", async (req, res) => {
  try {
    const { performance, experience, skillLevel, adaptability } = req.body;

    if (!performance || !experience || !skillLevel || !adaptability) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const optimizedRole = await optimizeRole(performance, experience, skillLevel, adaptability);
    res.json({ optimizedRole });
  } catch (error) {
    console.error("Error in dynamic role optimization:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
