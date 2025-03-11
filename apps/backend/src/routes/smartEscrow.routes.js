import express from "express";
import { processEscrow } from "../services/smartEscrowService.js";

const router = express.Router();

router.post("/process", async (req, res) => {
  const result = await processEscrow(req.body);
  res.json(result);
});

export default router;
