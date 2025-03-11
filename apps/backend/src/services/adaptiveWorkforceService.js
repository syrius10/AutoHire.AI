import axios from "axios";

export const analyzeWorkforceAdaptability = async (req, res) => {
  try {
    const response = await axios.post(
      "http://localhost:5029/predict_adaptability",
      req.body,
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to analyze workforce adaptability" });
  }
};
