import express from "express";
import { proposeProject, allocateBudget, getCompanyStatus } from "../services/decentralizedCompanyService.js";

// AI-powered self-managed decentralized company automation.

const router = express.Router();

/**
 * @route POST /api/decentralized-company/propose
 * @desc Proposes a new AI-managed project in the decentralized company.
 */
router.post("/propose", async (req, res) => {
  try {
    const { projectName, budget, expectedOutcome } = req.body;
    if (!projectName || !budget || !expectedOutcome) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const project = await proposeProject(projectName, budget, expectedOutcome);
    res.json(project);
  } catch (error) {
    console.error("Error proposing project:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

/**
 * @route POST /api/decentralized-company/allocate-budget
 * @desc Allocates budget to an existing AI-managed project.
 */
router.post("/allocate-budget", async (req, res) => {
  try {
    const { projectId, amount } = req.body;
    if (!projectId || !amount) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const allocation = await allocateBudget(projectId, amount);
    res.json(allocation);
  } catch (error) {
    console.error("Error allocating budget:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

/**
 * @route GET /api/decentralized-company/status
 * @desc Fetches the current decentralized company status.
 */
router.get("/status", async (req, res) => {
  try {
    const status = await getCompanyStatus();
    res.json(status);
  } catch (error) {
    console.error("Error fetching company status:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
