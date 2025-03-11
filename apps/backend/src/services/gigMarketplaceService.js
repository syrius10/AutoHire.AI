import axios from "axios";

// Calls AI model for freelancer-job matching in gig work.

/**
 * Calls AI model for freelancer-job matching in the gig economy.
 */
export const getGigMatches = async (skills, experience, preferredRate) => {
  try {
    const response = await axios.post(
      "http://localhost:5085/api/gig-marketplace/match",
      {
        skills,
        experience,
        preferredRate,
      },
    );
    return response.data.matchedGigs;
  } catch (error) {
    console.error("Error fetching gig matches:", error);
    throw new Error("Gig marketplace matching failed.");
  }
};
