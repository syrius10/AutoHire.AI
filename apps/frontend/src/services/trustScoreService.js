import axios from "axios";

export const fetchTrustScores = async () => {
  try {
    const response = await axios.get("/api/trust-score/score");
    return response.data;
  } catch (error) {
    console.error("Error fetching trust scores:", error);
    return [];
  }
};
