import axios from "axios";

// Identifies skill gaps & provides enhancement strategies.

export const analyzeSkillGaps = async (req, res) => {
  try {
    const response = await axios.post(
      "http://localhost:5058/skill-gap-analysis",
      req.body,
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to analyze skill gaps." });
  }
};
