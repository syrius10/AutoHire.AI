import axios from "axios";

export const checkCompliance = async (req, res) => {
  try {
    const response = await axios.post("http://localhost:5045/check-compliance", req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Compliance check service unavailable" });
  }
};
