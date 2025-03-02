import axios from "axios";

/**
 * Calls AI-powered freelancer income forecasting API.
 */
export const fetchFreelancerIncomeForecast = async (monthlyGigs, avgEarnings, experience, pastEarnings, jobsCompleted, avgRating) => {
  try {
    const response = await axios.post("http://localhost:5066/api/freelancer-finance/income-forecast", {
      monthlyGigs: parseFloat(monthlyGigs),
      avgEarnings: parseFloat(avgEarnings),
      experience: parseFloat(experience),
      pastEarnings: parseFloat(pastEarnings),
      jobsCompleted: parseFloat(jobsCompleted),
      avgRating: parseFloat(avgRating),
    });

    return response.data.estimatedIncome;
  } catch (error) {
    console.error("Error fetching freelancer income forecast:", error);
    throw new Error("Freelancer income forecasting failed.");
  }
};
