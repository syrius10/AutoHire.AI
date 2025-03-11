import axios from "axios";

// Calls AI model for freelancer career insights

/**
 * Calls AI-powered career planning API for freelancers.
 */
export const getCareerRecommendation = async (
  experience,
  completedGigs,
  rating,
) => {
  try {
    const response = await axios.post("http://localhost:5064/career-planning", {
      experience,
      completed_gigs: completedGigs,
      rating,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching career recommendation:", error);
    throw new Error("Career recommendation failed.");
  }
};
