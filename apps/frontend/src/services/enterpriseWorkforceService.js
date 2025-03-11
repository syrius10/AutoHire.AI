import axios from "axios";

// Fetches AI-powered workforce planning insights

export const fetchWorkforcePlan = async (
  departmentSize,
  revenueGrowth,
  attritionRate,
) => {
  try {
    const response = await axios.post("/api/enterprise-workforce/plan", {
      departmentSize,
      revenueGrowth,
      attritionRate,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching workforce plan:", error);
    throw error;
  }
};
