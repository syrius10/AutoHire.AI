import axios from "axios";

const AI_SERVICE_URL = "http://localhost:5020"; // URL for AI workforce prediction service

/**
 * Fetch workforce predictions from the AI service.
 */
export const getWorkforcePredictions = async (industry, region, skills) => {
  try {
    const response = await axios.post(`${AI_SERVICE_URL}/predict-workforce`, {
      industry,
      region,
      skills,
    });

    return response.data; // AI-generated workforce insights
  } catch (error) {
    console.error("Error fetching workforce predictions:", error);
    throw new Error("Failed to retrieve workforce insights.");
  }
};

export const trackEmployeeProgression = async (employeeId) => {
    try {
      const response = await axios.get(`/api/workforce/progression/${employeeId}`);
      return response.data;
    } catch (error) {
      console.error("Error tracking workforce mobility:", error);
      return [];
    }
};
  