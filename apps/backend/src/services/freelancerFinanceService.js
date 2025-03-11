import axios from "axios";

/**
 * Calls AI-powered freelancer financial forecasting API.
 */
export const fetchFreelancerIncomeForecast = async (
  monthlyGigs,
  avgEarnings,
  experience,
  pastEarnings,
  jobsCompleted,
  avgRating,
) => {
  try {
    const response = await axios.post("http://localhost:5066/income-forecast", {
      monthly_gigs: monthlyGigs,
      avg_earnings: avgEarnings,
      experience: experience,
      past_earnings: pastEarnings,
      jobs_completed: jobsCompleted,
      avg_rating: avgRating,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching income forecast:", error);
    throw new Error("Freelancer income forecasting failed.");
  }
};
