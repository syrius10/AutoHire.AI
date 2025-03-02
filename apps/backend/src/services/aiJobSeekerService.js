import axios from "axios";

// Automates AI-driven job applications & career recommendations.

export const applyForJob = async (experience, skillMatch, prevSuccess) => {
  try {
    const response = await axios.post("http://localhost:5094/apply", {
      experience,
      skillMatch,
      prevSuccess,
    });
    return response.data.applicationStatus;
  } catch (error) {
    console.error("Error in AI job seeker service:", error);
    throw new Error("Job application failed.");
  }
};
