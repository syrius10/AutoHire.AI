import axios from "axios";

// Handles AI-driven blockchain-based work incentives.

export const fetchUserBalance = async (userId) => {
  const response = await axios.get(`/api/tokenized-work/balance/${userId}`);
  return response.data;
};

export const assignTokens = async (userId, workData) => {
  const response = await axios.post("/api/tokenized-work/assign", {
    userId,
    ...workData,
  });
  return response.data;
};
