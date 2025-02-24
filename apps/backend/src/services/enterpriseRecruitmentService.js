import axios from "axios";

// Automates large-scale candidate screening.

/**
 * AI-driven candidate screening for enterprise hiring.
 * @param {Array} candidates - List of candidate profiles.
 */
export const screenCandidates = async (candidates) => {
  try {
    const response = await axios.post("http://localhost:5033/enterprise-recruitment-screen", {
      candidates,
    });
    return response.data;
  } catch (error) {
    console.error("Error in enterprise candidate screening:", error);
    throw new Error("Failed to process candidate screening.");
  }
};
