import express from "express";
import { generateJobDescription } from "../services/aiJobDescriptionService";

const router = express.Router();

router.post("/generate", async (req, res) => {
    const { jobTitle } = req.body;
    if (!jobTitle) {
        return res.status(400).json({error: "Job title is required."});
    }

    try {
        const description = await generateJobDescription(jobTitle);
        res.json({ description });
    } catch (error) {
        res.status(500).json({ error: "Failed to generate job description. "});
    }
});

export default router;