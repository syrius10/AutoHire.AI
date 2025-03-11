import express from "express";
import axios from "axios";

const router = express.Router();
const AI_COST_SERVICE = "http://localhost:5023/workforce_cost";

// ✅ Get workforce cost forecast
router.post("/forecast", async (req, res) => {
  try {
    const response = await axios.post(AI_COST_SERVICE, req.body);
    res.json(response.data);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to retrieve workforce cost forecast." });
  }
});

export default router;
