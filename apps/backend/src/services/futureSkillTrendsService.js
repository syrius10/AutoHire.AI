import axios from "axios";

export const getSkillTrends = async (req, res) => {
  try {
    const response = await axios.post("http://localhost:5029/predict_adaptability", req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch skill trends" });
  }
};
