import axios from "axios";

export const scheduleInterview = async (candidateName, jobRole) => {
  try {
    const response = await axios.post("/api/interview-scheduler/schedule", {
      candidateName,
      jobRole,
    });
    return response.data;
  } catch (error) {
    console.error("Error scheduling interview:", error);
    return { error: "Failed to schedule interview." };
  }
};
