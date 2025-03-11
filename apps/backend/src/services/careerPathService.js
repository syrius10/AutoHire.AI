import axios from "axios";

export const getCareerPath = async (req, res) => {
  try {
    const response = await axios.post(
      "http://localhost:5055/predict-career-path",
      req.body,
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Career path prediction failed." });
  }
};
