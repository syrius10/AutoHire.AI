import axios from "axios";

// Provides AI-powered workforce financial tracking & decentralized payroll insights.

/**
 * Calls AI model to track financial health.
 */
export const trackFinancialHealth = async (total_earnings, expenses, tax_rate, blockchain_tx_fees) => {
  try {
    const response = await axios.post("http://localhost:5133/track-finance", {
      total_earnings,
      expenses,
      tax_rate,
      blockchain_tx_fees,
    });
    return response.data;
  } catch (error) {
    console.error("Error in tracking financial health:", error);
    throw new Error("Failed to track workforce financial health.");
  }
};
