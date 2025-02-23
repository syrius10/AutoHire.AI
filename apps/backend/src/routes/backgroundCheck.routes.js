import express from "express";
import { runBackgroundCheck } from "../services/backgroundCheckService";

const router = express.Router();

/**
 * Run automated background check
 */
router.post("/check", async (req, res) => {
    const { candidateId, ssn } = req.body;
    if (!candidateId || !ssn) return res.status(400).json({ error: "Missing required fields" });

    const result = await runBackgroundCheck(candidateId, ssn);
    res.json(result);
});

export default router;