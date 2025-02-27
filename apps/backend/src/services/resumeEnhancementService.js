import axios from "axios";

// Calls AI model to enhance resumes & branding

/**
 * Calls AI model for resume enhancement
 */
export const enhanceResume = async (resumeText) => {
  try {
    const response = await axios.post("http://localhost:5051/enhance-resume", {
      resumeText,
    });
    return response.data;
  } catch (error) {
    console.error("Error enhancing resume:", error);
    throw new Error("Resume enhancement failed.");
  }
};
