import express from "express";
import { getGigDemand } from "../services/gigWorkDemandService.js";

// AI-driven gig market demand analysis

const router = express.Router();

router.get("/demand", async (req, res) => {
    const demand = await getGigDemand();
    res.json(demand);
});

export default router;
