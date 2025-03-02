import axios from "axios";

// Fetches AI-powered gig work matching.

/**
 * Fetches AI-powered gig work matches.
 */
export const fetchGigMatches = async () => {
  try {
    const response = await axios.post("http://localhost:5085/api/gig-marketplace/match", {
      skills: ["JavaScript", "React"],
      experience: 3,
      preferredRate: 50,
    });
    return response.data.matchedGigs;
  } catch (error) {
    console.error("Error fetching gig matches:", error);
    return [];
  }
};
