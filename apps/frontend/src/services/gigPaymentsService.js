import axios from "axios";

// Calls AI for blockchain-based payments & automation.

/**
 * Fetches AI-driven blockchain gig payments.
 */
export const fetchGigPayments = async () => {
  try {
    const response = await axios.post(
      "http://localhost:5087/api/gig-payments/process",
      {
        contractId: "ABC123",
        freelancerId: "7890",
        paymentAmount: 1500,
      },
    );
    return response.data.paymentStatus;
  } catch (error) {
    console.error("Error processing gig payment:", error);
    return [];
  }
};
