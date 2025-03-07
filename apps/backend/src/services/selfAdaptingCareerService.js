import axios from "axios";

// Provides AI-driven self-adapting career progression models.

export const predictCareerProgression = async (experience, skillsLevel) => {
  try {
    const response = await axios.post("http://localhost:5138/predict", {
      experience,
      skillsLevel,
    });
    return response.data;
  } catch (error) {
    console.error("Error predicting career progression:", error);
    throw new Error("Career progression prediction failed.");
  }
};
