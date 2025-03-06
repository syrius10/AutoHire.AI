import axios from "axios";

// Retrieves AI-driven workforce financial tracking & decentralized payroll data.

/**
 * Fetches AI-powered decentralized financial tracking insights.
 */
export const fetchDecentralizedFinance = async () => {
  try {
    const response = await axios.get("http://localhost:5001/api/decentralized-finance/track");
    return response.data;
  } catch (error) {
    console.error("Error fetching decentralized finance data:", error);
    return null;
  }
};
