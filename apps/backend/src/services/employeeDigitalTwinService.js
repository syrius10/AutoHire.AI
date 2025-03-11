import axios from "axios";

// Calls AI Model to Simulate Employee Digital Twin

/**
 * Simulates an employee digital twin using AI models.
 */
export const simulateEmployeeTwin = async (
  employeeId,
  experience,
  skillLevel,
  performanceScore,
) => {
  try {
    const response = await axios.post("http://localhost:5109/simulate", {
      employeeId,
      experience,
      skillLevel,
      performanceScore,
    });

    return response.data;
  } catch (error) {
    console.error("Error in employee digital twin simulation:", error);
    throw new Error("Employee digital twin simulation failed.");
  }
};
