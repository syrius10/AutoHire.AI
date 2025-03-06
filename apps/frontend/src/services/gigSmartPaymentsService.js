import axios from "axios";

// Fetches AI-powered smart contract payment insights.

export const fetchSmartPayments = async () => {
  try {
    const response = await axios.get("/api/gig-smart-payments/list");
    return response.data;
  } catch (error) {
    console.error("Error fetching smart contract payments:", error);
    return [];
  }
};
