import express from "express";
import { getHighPotentialLeaders } from "../services/highPotentialLeadersService.js";

const router = express.Router();

router.post("/identify", async (req, res) => {
  const data = req.body;
  const leaders = await getHighPotentialLeaders(data);
  res.json(leaders);
});

export default router;
