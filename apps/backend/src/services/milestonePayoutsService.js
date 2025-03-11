import axios from "axios";

// Fetches AI-driven milestone-based freelancer payments.

/**
 * Calls AI model to calculate milestone payouts.
 */
export const calculateMilestonePayout = async (
  contract_value,
  completion_percentage,
  client_satisfaction_score,
) => {
  try {
    const response = await axios.post(
      "http://localhost:5132/milestone-payout",
      {
        contract_value,
        completion_percentage,
        client_satisfaction_score,
      },
    );
    return response.data.milestone_payout;
  } catch (error) {
    console.error("Error in calculating milestone payout:", error);
    throw new Error("Failed to process milestone payout.");
  }
};
