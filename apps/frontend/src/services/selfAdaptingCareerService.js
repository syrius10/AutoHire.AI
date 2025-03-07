import axios from "axios";

// Retrieves AI-powered career progression automation insights.

export const fetchCareerProgression = async (experience, skillsLevel) => {
  try {
    const response = await axios.post("/api/self-adapting-career/predict", {
      experience,
      skillsLevel,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching career progression:", error);
    return { error: "Failed to fetch career progression insights." };
  }
};
