import axios from "axios";

export const getReskillingRecommendations = async (req, res) => {
  try {
    const response = await axios.post("http://localhost:5030/recommend_training", req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch reskilling recommendations" });
  }
};
