import axios from "axios";

// Fetches AI-driven workforce cost forecasts.

export const getCostForecast = async () => {
  try {
    const response = await axios.get("/api/enterprise-workforce-cost");
    return response.data;
  } catch (error) {
    console.error("Error fetching workforce cost forecast:", error);
    return { estimatedCost: "N/A", budgetAllocation: "N/A" };
  }
};
