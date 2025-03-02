import axios from "axios";

// Automates secure blockchain-powered payments.

/**
 * Calls AI-based blockchain service for gig payment processing.
 */
export const processGigPayment = async (contractId, freelancerId, paymentAmount) => {
  try {
    const response = await axios.post("http://localhost:5087/api/gig-payments/process", {
      contractId,
      freelancerId,
      paymentAmount,
    });
    return response.data.paymentStatus;
  } catch (error) {
    console.error("Error processing gig payment:", error);
    throw new Error("Blockchain payment processing failed.");
  }
};
