import axios from "axios";

// Provides AI-powered financial forecasting & income analysis

/**
 * Calls AI-powered freelancer financial planning API.
 */
export const getIncomeForecast = async (monthlyGigs, avgEarnings, experience) => {
  try {
    const response = await axios.post("http://localhost:5066/income-forecast", {
      monthly_gigs: monthlyGigs,
      avg_earnings: avgEarnings,
      experience,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching income forecast:", error);
    throw new Error("Income forecast failed.");
  }
};
