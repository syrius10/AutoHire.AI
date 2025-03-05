import axios from "axios";

// Fetches AI-powered Web3 hiring & payment automation insights

export const fetchWeb3WorkforceData = async () => {
  try {
    const response = await axios.get("http://localhost:5001/api/web3-workforce/payment");
    return response.data;
  } catch (error) {
    console.error("Error fetching Web3 workforce data:", error);
    return { error: "Failed to load Web3 workforce insights." };
  }
};
