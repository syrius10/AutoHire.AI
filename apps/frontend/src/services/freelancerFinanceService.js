import axios from "axios";

// Calls AI for financial planning & forecasting

export const fetchIncomeForecast = async () => {
  try {
    const response = await axios.get("/api/freelancer-finance/forecast");
    return response.data;
  } catch (error) {
    console.error("Error fetching financial forecast:", error);
    throw new Error("Failed to fetch financial forecast.");
  }
};
