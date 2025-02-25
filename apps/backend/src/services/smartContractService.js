import axios from "axios";

export const generateSmartContract = async (req, res) => {
  const { data } = await axios.post("http://localhost:5051/generate_contract", req.body);
  res.json(data);
};
