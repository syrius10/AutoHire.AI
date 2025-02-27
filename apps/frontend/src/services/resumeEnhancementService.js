import axios from "axios";

// Fetches AI-optimized resumes

export const fetchEnhancedResume = async (resumeText) => {
  const response = await axios.post("/api/resume-enhancement", { resumeText });
  return response.data;
};
