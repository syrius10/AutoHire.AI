import axios from "axios";

export const assessCandidate = async (req, res) => {
  try {
    const response = await axios.post(
      "http://localhost:5043/global-talent",
      req.body,
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "AI service unavailable" });
  }
};
