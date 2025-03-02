import express from "express";
import { assignTeam } from "../services/autonomousTeamService.js";

// AI-powered self-organizing workforce teams

const router = express.Router();

/**
 * @route POST /api/autonomous-team/assign
 * @desc AI-powered team assignment based on employee skills & collaboration
 */
router.post("/assign", async (req, res) => {
  try {
    const { experience, skill, teamwork } = req.body;
    if (!experience || !skill || !teamwork) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const teamAssignment = await assignTeam(experience, skill, teamwork);
    res.json({ assignedTeam: teamAssignment });
  } catch (error) {
    console.error("Error in autonomous team assignment:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
