import axios from "axios";

/**
 * Calls AI-powered dispute resolution API.
 */
export const resolveDispute = async (
  conversation,
  contractValue = 5000,
  delayedPayments = 0,
  unclearTerms = 0,
  pastDisputes = 0,
) => {
  try {
    const response = await axios.post("http://localhost:5054/resolve_dispute", {
      conversation,
      contract_value: contractValue,
      delayed_payments: delayedPayments,
      unclear_terms: unclearTerms,
      past_disputes: pastDisputes,
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching dispute resolution result:", error);
    throw new Error("Failed to resolve dispute.");
  }
};
