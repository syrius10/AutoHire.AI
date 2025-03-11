import axios from "axios";

// Retrieves AI-driven predictive financial forecasts.

export const fetchFinancialForecast = async (pastIncome) => {
  try {
    const response = await axios.post("/api/gig-financial-forecast/predict", {
      pastIncome,
    });
    return response.data.futureIncome;
  } catch (error) {
    console.error("Error fetching financial forecast:", error);
    return 0;
  }
};
