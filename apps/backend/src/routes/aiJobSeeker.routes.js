import express from "express";
import { applyForJob } from "../services/aiJobSeekerService.js";

// AI job seeker that auto-applies & optimizes job searches.

const router = express.Router();

/**
 * @route POST /api/ai-job-seeker/apply
 * @desc AI-powered autonomous job seeker
 */
router.post("/apply", async (req, res) => {
  try {
    const { experience, skillMatch, prevSuccess } = req.body;

    if (experience === undefined || skillMatch === undefined || prevSuccess === undefined) {
      return res.status(400).json({ error: "Missing required parameters." });
    }

    const result = await applyForJob(experience, skillMatch, prevSuccess);
    res.json({ applicationStatus: result });
  } catch (error) {
    console.error("Error in AI job seeker service:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
