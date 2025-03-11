import axios from "axios";

export const predictTurnoverRisk = async (req, res) => {
  try {
    const response = await axios.post(
      "http://localhost:5028/turnover_risk",
      req.body,
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error predicting turnover risk" });
  }
};
