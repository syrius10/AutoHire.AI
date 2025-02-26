import axios from "axios";

// Calls AI for job & skill demand forecasting.

export const fetchIndustryDemandPrediction = async () => {
  try {
    const response = await axios.get("/api/industry-demand-prediction");
    return response.data;
  } catch (error) {
    console.error("Error fetching industry demand prediction:", error);
    return [];
  }
};
