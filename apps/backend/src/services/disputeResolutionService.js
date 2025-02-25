import axios from "axios";

export const resolveDispute = async (req, res) => {
  const { data } = await axios.post("http://localhost:5054/resolve_dispute", req.body);
  res.json(data);
};
