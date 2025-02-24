import axios from "axios";

// Calls AI service to recommend upskilling programs for employees

export const fetchReskillingRecommendations = async () => {
  try {
    const response = await axios.post("/api/training/reskilling", {
      job_role: "Cybersecurity Analyst",
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching reskilling recommendations:", error);
    return { error: "Failed to fetch training recommendations" };
  }
};
