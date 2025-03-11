import express from "express";
import { generatePortfolio } from "../services/portfolioGeneratorService.js";

// AI-driven portfolio creation & skill demonstration

const router = express.Router();

/**
 * @route POST /api/portfolio-generator
 * @desc AI-driven portfolio creation & skill demonstration
 */
router.post("/", async (req, res) => {
  try {
    const { name, expertise, projects } = req.body;
    if (!name || !expertise || !projects) {
      return res
        .status(400)
        .json({ error: "Name, expertise, and projects are required" });
    }

    const portfolio = await generatePortfolio(name, expertise, projects);
    res.json(portfolio);
  } catch (error) {
    console.error("Error generating portfolio:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
