import axios from "axios";

// Retrieves AI-powered burnout risk tracking & stress management solutions.

export const fetchBurnoutRisk = async (
  workHours,
  stressLevel,
  sleepQuality,
) => {
  try {
    const response = await axios.post("/api/burnout-prevention/predict", {
      workHours,
      stressLevel,
      sleepQuality,
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching burnout risk:", error);
    return { risk: "Error fetching burnout data" };
  }
};
