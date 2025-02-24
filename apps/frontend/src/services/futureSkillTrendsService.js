import axios from "axios";

// Fetches AI-predicted future skill demand trends

export const fetchSkillTrends = async () => {
  try {
    const response = await axios.post("/api/skills/trends", {
      year: 2025,
      job_role: "AI Engineer",
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching skill trends:", error);
    return { error: "Failed to fetch skill trends" };
  }
};
