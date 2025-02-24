import axios from "axios";

// Retrieves workforce efficiency analytics.

export const fetchEfficiencyData = async () => {
  try {
    const response = await axios.get("/api/efficiency");
    return response.data;
  } catch (error) {
    console.error("Error fetching efficiency data:", error);
    return null;
  }
};