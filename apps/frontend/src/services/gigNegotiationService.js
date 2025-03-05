import axios from "axios";

// Handles API calls for AI-powered freelancer negotiations.

/**
 * Calls AI model for freelancer work term negotiations.
 */
export const negotiateWorkTerms = async (negotiationData) => {
  try {
    const response = await axios.post("http://localhost:5001/api/gig-negotiation/negotiate", negotiationData);
    return response.data;
  } catch (error) {
    console.error("Error in AI negotiation:", error);
    return { error: "Failed to negotiate terms" };
  }
};
