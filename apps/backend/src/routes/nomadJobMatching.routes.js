import express from "express";
import { matchNomadJob } from "../services/nomadJobMatchingService.js";

// Handles AI-powered job matching for digital nomads.

const router = express.Router();

/**
 * @route POST /api/nomad-job-matching/match
 * @desc AI-powered job matching for digital nomads
 */
router.post("/match", async (req, res) => {
  try {
    const { remoteFriendly, skillMatch, timezoneCompatible, remoteExperience } =
      req.body;

    if (
      remoteFriendly === undefined ||
      !skillMatch ||
      timezoneCompatible === undefined ||
      remoteExperience === undefined
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const matchResult = await matchNomadJob(
      remoteFriendly,
      skillMatch,
      timezoneCompatible,
      remoteExperience,
    );
    res.json(matchResult);
  } catch (error) {
    console.error("Error in nomad job matching:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
