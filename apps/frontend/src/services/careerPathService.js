import axios from "axios";

// ✅ careerPathService.js → Fetches AI career recommendations.

export const fetchCareerPath = async () => {
  try {
    const response = await axios.get("/api/career-path");
    return response.data;
  } catch (error) {
    console.error("Error fetching career path:", error);
    return [];
  }
};
