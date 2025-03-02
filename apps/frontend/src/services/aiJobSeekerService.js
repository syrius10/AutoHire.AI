import axios from "axios";

// Retrieves AI-driven job applications & career tracking.

export const applyForAIJob = async (experience, skillMatch, prevSuccess) => {
  const response = await axios.post("/api/ai-job-seeker/apply", {
    experience,
    skillMatch,
    prevSuccess,
  });
  return response.data;
};
