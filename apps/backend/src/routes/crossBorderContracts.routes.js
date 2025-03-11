import express from "express";
import { generateContract } from "../services/crossBorderContractsService.js";

// AI-powered cross-border job contracts & legal automation

const router = express.Router();

/**
 * @route POST /api/cross-border-contracts/generate
 * @desc AI-driven cross-border job contract generation
 */
router.post("/generate", async (req, res) => {
  try {
    const { employeeCountry, employerCountry, jobRole } = req.body;
    if (!employeeCountry || !employerCountry || !jobRole) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const contract = await generateContract(
      employeeCountry,
      employerCountry,
      jobRole,
    );
    res.json(contract);
  } catch (error) {
    console.error("Error in generating cross-border contract:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
