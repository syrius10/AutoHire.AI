import axios from "axios";

// Provides turnover risk insights.

export const fetchTurnoverRisk = async () => {
  try {
    const response = await axios.get("/api/turnover");
    return response.data;
  } catch (error) {
    console.error("Error fetching turnover risk:", error);
    return null;
  }
};
