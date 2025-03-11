import axios from "axios";

export const validateEscrowPayment = async (req, res) => {
  const { data } = await axios.post(
    "http://localhost:5053/validate_escrow",
    req.body,
  );
  res.json(data);
};
