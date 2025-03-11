import express from "express";
import {
  generateAPIKey,
  revokeAPIKey,
  getAPIUsageStats,
} from "../services/apiManagementService.js";

const router = express.Router();

// ✅ Generate API Key
router.post("/generate", async (req, res) => {
  try {
    const { userId, plan } = req.body;
    const apiKey = await generateAPIKey(userId, plan);
    res.json({ apiKey });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Revoke API Key
router.post("/revoke", async (req, res) => {
  try {
    const { apiKey } = req.body;
    const result = await revokeAPIKey(apiKey);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Get API Usage Statistics
router.get("/usage/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const stats = await getAPIUsageStats(userId);
    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
