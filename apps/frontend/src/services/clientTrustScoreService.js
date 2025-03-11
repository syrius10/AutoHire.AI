import axios from "axios";

// Retrieves AI-based client trust scores.

export const fetchClientTrustScores = async () => {
  try {
    const response = await axios.get("/api/client-trust-score");
    return response.data;
  } catch (error) {
    console.error("Error fetching client trust scores:", error);
    return null;
  }
};
