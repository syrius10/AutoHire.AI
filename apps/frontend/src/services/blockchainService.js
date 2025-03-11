import axios from "axios";

const API_URL = "http://localhost:5001/api/blockchain";

export const verifyCredential = async (candidateId) => {
  const response = await axios.post(`${API_URL}/verify`, { candidateId });
  return response.data;
};
