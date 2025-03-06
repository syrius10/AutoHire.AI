import axios from "axios";

// Fetches AI-powered workforce decentralization insights

export const fetchWorkforceDecentralization = async () => {
  try {
    const response = await axios.get("/api/decentralized-workforce/analyze");
    return response.data;
  } catch (error) {
    console.error("Error fetching workforce decentralization insights:", error);
    return null;
  }
};
