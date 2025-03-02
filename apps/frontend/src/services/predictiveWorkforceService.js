import axios from "axios";

// Fetches AI-powered workforce demand forecasting.

export const fetchHiringForecast = async () => {
  const response = await axios.post("/api/predictive-workforce/hiring-demand", {
    industryGrowth: 5,
    budget: 1000000,
    companySize: 500,
  });
  return response.data;
};
