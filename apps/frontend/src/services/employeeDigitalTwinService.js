import axios from "axios";

// Fetches AI-powered Employee Digital Twin Insights

/**
 * Fetches AI-generated employee digital twin insights.
 */
export const fetchEmployeeDigitalTwin = async (employeeId) => {
  try {
    const response = await axios.post("http://localhost:5001/api/employee-digital-twin/simulate", {
      employeeId,
      experience: 5, // Example static data
      skillLevel: 7,
      performanceScore: 85,
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching employee digital twin data:", error);
    return { error: "Failed to fetch digital twin insights." };
  }
};
