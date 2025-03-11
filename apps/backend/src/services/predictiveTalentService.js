import axios from "axios";

export const getTalentForecast = async (req, res) => {
  try {
    const response = await axios.post(
      "http://localhost:5025/talent_forecast",
      req.body,
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving talent forecast" });
  }
};
