import express from "express";
import { getVirtualWorkspace } from "../services/metaverseWorkspacesService.js";

// AI-driven virtual workspaces & collaboration.

const router = express.Router();

/**
 * @route POST /api/metaverse-workspaces/recommend
 * @desc AI-driven virtual workspace recommendation
 */
router.post("/recommend", async (req, res) => {
  try {
    const { teamSize, workNature } = req.body;
    if (!teamSize || !workNature) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const workspaceSuggestion = await getVirtualWorkspace(teamSize, workNature);
    res.json({ recommendedWorkspace: workspaceSuggestion });
  } catch (error) {
    console.error("Error recommending workspace:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
