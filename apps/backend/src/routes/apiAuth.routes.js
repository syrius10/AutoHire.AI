import express from "express";
import { generateAPIKey, validateAPIKey } from "../services/authService";

const router = express.Router();

// ✅ Generate API Key for an User
router.post("/generate-api-key", async (req, res) => {
  const { userId, plan } = req.body;
  if (!userId) return res.status(400).json({ error: "User ID is required " });

  try {
    const apiKey = await generateAPIKey(userId, plan || "free");
    res.json({ apiKey });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Validate API Key
router.post("/validate-api-key", async (req, res) => {
  const { apiKey } = req.body;
  if (!apiKey) return res.status(400).json({ error: "API key is required " });

  try {
    const keyData = await validateAPIKey(apiKey);
    if (!keyData) return res.status(401).json({ error: "Invalid API key" });

    res.json({ valid: true, plan: keyData.plan });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
