import axios from "axios";

export const visaScreening = async (req, res) => {
  try {
    const response = await axios.post("http://localhost:5046/visa-screening", req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Visa screening service unavailable" });
  }
};
