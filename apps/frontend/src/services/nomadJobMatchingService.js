import axios from "axios";

// Fetches job matches tailored to digital nomads.

/**
 * Calls AI-powered job matching insights for digital nomads.
 */
export const fetchNomadJobMatches = async () => {
  try {
    const response = await axios.get(
      "http://localhost:5125/nomad-job-matching",
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching job matches:", error);
    throw new Error("Failed to fetch job matching data.");
  }
};
