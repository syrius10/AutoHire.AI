import express from "express";
import { evolveWorkforce } from "../services/aiSelfEvolvingWorkforceService.js";

const router = express.Router();

/**
 * @route GET /api/ai-workforce/evolve
 * @desc AI-powered self-evolving workforce roles & optimization.
 */
router.get("/evolve", async (req, res) => {
  try {
    const result = await evolveWorkforce();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "AI workforce evolution failed." });
  }
});

export default router;
