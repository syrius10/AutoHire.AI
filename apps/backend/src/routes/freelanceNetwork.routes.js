import express from "express";
import { matchFreelancers } from "../services/freelanceNetworkService.js";

const router = express.Router();

router.post("/match", async (req, res) => {
    const result = await matchFreelancers(req.body);
    res.json(result);
});

export default router;
