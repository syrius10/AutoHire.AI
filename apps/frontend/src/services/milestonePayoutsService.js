import axios from "axios";

// Calls AI for blockchain-based freelancer milestone payouts.

/**
 * Fetches AI-driven milestone payout details.
 */
export const fetchMilestonePayouts = async () => {
  try {
    const response = await axios.get(
      "http://localhost:5001/api/milestone-payouts/calculate",
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching milestone payouts:", error);
    return null;
  }
};
