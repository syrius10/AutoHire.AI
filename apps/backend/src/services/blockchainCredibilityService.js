import axios from "axios";

// AI-powered freelancer credibility & trust scoring

/**
 * Fetches AI-driven freelancer credibility score
 */
export const getFreelancerCredibilityScore = async (pastJobs, rating, paymentTimeliness) => {
  try {
    const response = await axios.post("http://localhost:5124/credibility-score", {
      past_jobs: pastJobs,
      rating,
      payment_timeliness: paymentTimeliness,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching credibility score:", error);
    throw new Error("Credibility scoring failed.");
  }
};
