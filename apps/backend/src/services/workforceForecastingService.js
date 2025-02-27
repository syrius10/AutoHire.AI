import axios from "axios";

// Fetches AI-driven workforce growth predictions

/**
 * Calls AI model to predict workforce hiring demand based on market trends.
 */
export const forecastHiringDemand = async (year, industryGrowth, hiringBudget) => {
  try {
    const response = await axios.post("http://localhost:5068/forecast_hiring", {
      year,
      industry_growth: industryGrowth,
      hiring_budget: hiringBudget,
    });
    return response.data;
  } catch (error) {
    console.error("Error in workforce forecasting:", error);
    throw new Error("Workforce forecasting failed.");
  }
};
