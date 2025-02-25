import axios from "axios";

export const detectFraud = async (req, res) => {
  const { data } = await axios.post("http://localhost:5052/detect_fraud", req.body);
  res.json(data);
};
