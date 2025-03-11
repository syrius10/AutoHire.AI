import axios from "axios";

// Fetches AI-powered real-time hiring recommendations based on location.

/**
 * Calls AI model for location-based hiring insights.
 */
export const fetchLocationBasedJobs = async () => {
  try {
    const response = await axios.get(
      "http://localhost:5126/location-based-hiring",
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching location-based hiring data:", error);
    throw new Error("Failed to fetch hiring data.");
  }
};
