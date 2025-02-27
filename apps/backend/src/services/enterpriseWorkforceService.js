import axios from "axios";

// Calls AI for workforce planning & HR insights

/**
 * Calls AI model for workforce planning based on department size, revenue growth, and attrition rate.
 */
export const getWorkforcePlan = async (departmentSize, revenueGrowth, attritionRate) => {
  try {
    const response = await axios.post("http://localhost:5067/predict_workforce", {
      department_size: departmentSize,
      revenue_growth: revenueGrowth,
      attrition_rate: attritionRate,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching workforce plan:", error);
    throw new Error("Failed to generate workforce plan.");
  }
};
