import axios from "axios";

// Calls AI model for Web3-powered hiring & payment automation

/**
 * Processes Web3 workforce payments
 */
export const processWeb3Payment = async (sender, receiver, amount) => {
  try {
    const response = await axios.post("http://localhost:5122/process-payment", {
      sender,
      receiver,
      amount,
    });
    return response.data;
  } catch (error) {
    console.error("Error processing Web3 payment:", error);
    throw new Error("Web3 payment processing failed.");
  }
};
