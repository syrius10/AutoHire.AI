import axios from "axios";

export const fetchEscrowStatus = async () => {
  return await axios.get("/api/escrow-payment/validate");
};
