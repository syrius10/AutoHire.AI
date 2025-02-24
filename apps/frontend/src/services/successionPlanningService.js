import axios from "axios";

// Calls AI for leadership planning insights.

export const fetchSuccessionPlan = async () => {
  try {
    const response = await axios.get("/api/succession");
    return response.data;
  } catch (error) {
    console.error("Error fetching succession plan:", error);
    return null;
  }
};
