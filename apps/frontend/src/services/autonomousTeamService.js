import axios from "axios";

// Fetches AI-generated workforce team formations

/**
 * Fetches AI-generated workforce team formations.
 */
export const fetchAutonomousTeams = async () => {
  try {
    const response = await axios.get("/api/autonomous-team/assign");
    return response.data.teams;
  } catch (error) {
    console.error("Error fetching autonomous teams:", error);
    return [];
  }
};
