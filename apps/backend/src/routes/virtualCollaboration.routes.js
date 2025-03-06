import express from "express";
import {
  createWorkspace,
  joinWorkspace,
  shareResource
} from "../services/virtualCollaborationService.js";

// AI-powered virtual collaboration space & co-working management.

const router = express.Router();

/**
 * @route POST /api/virtual-collaboration/create
 * @desc Create a virtual workspace
 */
router.post("/create", async (req, res) => {
  try {
    const { teamName } = req.body;
    if (!teamName) {
      return res.status(400).json({ error: "Team name is required" });
    }

    const result = await createWorkspace(teamName);
    res.json(result);
  } catch (error) {
    console.error("Error creating workspace:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

/**
 * @route POST /api/virtual-collaboration/join
 * @desc Join a virtual workspace
 */
router.post("/join", async (req, res) => {
  try {
    const { teamName, user } = req.body;
    if (!teamName || !user) {
      return res.status(400).json({ error: "Team name and user are required" });
    }

    const result = await joinWorkspace(teamName, user);
    res.json(result);
  } catch (error) {
    console.error("Error joining workspace:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

/**
 * @route POST /api/virtual-collaboration/share
 * @desc Share a resource in a workspace
 */
router.post("/share", async (req, res) => {
  try {
    const { teamName, resource } = req.body;
    if (!teamName || !resource) {
      return res.status(400).json({ error: "Team name and resource are required" });
    }

    const result = await shareResource(teamName, resource);
    res.json(result);
  } catch (error) {
    console.error("Error sharing resource:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
