import axios from "axios";

// Fetches AI-driven job matches for digital nomads.

/**
 * Calls AI job matching model for digital nomads.
 */
export const matchNomadJob = async (remoteFriendly, skillMatch, timezoneCompatible, remoteExperience) => {
  try {
    const response = await axios.post("http://localhost:5125/match", {
      remote_friendly: remoteFriendly,
      skill_match: skillMatch,
      timezone_compatible: timezoneCompatible,
      remote_experience: remoteExperience,
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching job matches:", error);
    throw new Error("Job matching failed.");
  }
};
