import axios from "axios";

// Retrieves AI insights on workforce adaptability

export const analyzeAdaptability = async () => {
  try {
    const response = await axios.post("/api/workforce/adaptability", {
      year: 2025,
      job_role: "Software Engineer",
    });
    return response.data;
  } catch (error) {
    console.error("Error analyzing workforce adaptability:", error);
    return { error: "Failed to analyze adaptability" };
  }
};
