import axios from "axios";

// Calls AI model for real-time workforce demand forecasting.

/**
 * Fetches workforce demand forecast from AI model.
 */
export const getWorkforceDemand = async (gdpGrowth, unemploymentRate, industryDemand) => {
  try {
    const response = await axios.post("http://localhost:5119/workforce-forecast", {
      gdp_growth: gdpGrowth,
      unemployment_rate: unemploymentRate,
      industry_demand: industryDemand,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching workforce demand forecast:", error);
    throw new Error("AI workforce demand forecasting failed.");
  }
};
