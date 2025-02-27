import axios from "axios";

// Retrieves AI-generated workforce forecasts

export const fetchWorkforceForecast = async (year, industryGrowth, hiringBudget) => {
  try {
    const response = await axios.post("/api/workforce-forecasting/predict", {
      year,
      industryGrowth,
      hiringBudget,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching workforce forecast:", error);
    throw error;
  }
};
