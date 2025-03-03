import axios from "axios";

/**
 * Fetches AI-driven dispute resolution insights.
 */
export const fetchDisputeResolution = async ({ conversation, contractValue, delayedPayments, unclearTerms, pastDisputes }) => {
  try {
    const response = await axios.post("http://localhost:5000/api/dispute-resolution/analyze", {
      conversation,
      contract_value: contractValue,
      delayed_payments: delayedPayments,
      unclear_terms: unclearTerms,
      past_disputes: pastDisputes,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching dispute resolution:", error);
    return { error: "Failed to retrieve dispute resolution result." };
  }
};
