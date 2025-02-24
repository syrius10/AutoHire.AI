import express from "express";
import axios from "axios";

const router = express.Router();
const AI_EFFICIENCY_SERVICE = "http://localhost:5024/efficiency_analysis";

// ✅ Get hiring efficiency forecast
router.post("/analyze", async (req, res) => {
  try {
    const response = await axios.post(AI_EFFICIENCY_SERVICE, req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve efficiency analysis." });
  }
});

export default router;
