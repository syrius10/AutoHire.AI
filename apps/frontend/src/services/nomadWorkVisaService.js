import axios from "axios";

// Fetches AI-driven work visa & global mobility tracking.

/**
 * Calls AI model for work visa tracking & mobility automation.
 */
export const fetchNomadWorkVisaStatus = async () => {
  try {
    const response = await axios.get("http://localhost:5127/nomad-work-visa");
    return response.data;
  } catch (error) {
    console.error("Error fetching work visa status:", error);
    throw new Error("Failed to fetch work visa data.");
  }
};
