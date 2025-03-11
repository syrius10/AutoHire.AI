import axios from "axios";

export const getEfficiencyPrediction = async (req, res) => {
  try {
    const response = await axios.post(
      "http://localhost:5026/effieciency_predict",
      req.body,
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving efficiency data" });
  }
};
