import axios from "axios";

export const translateJob = async (req, res) => {
  try {
    const response = await axios.post("http://localhost:5044/translate-job", req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Translation service unavailable" });
  }
};
