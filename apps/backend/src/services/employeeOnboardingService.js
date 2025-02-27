import axios from "axios";

// AI-driven onboarding

/**
 * Calls AI model to automate onboarding workflows.
 */
export const startOnboarding = async (employeeName, role, department) => {
  try {
    const response = await axios.post("http://localhost:5036/start_onboarding", {
      employee_name: employeeName,
      role,
      department,
    });
    return response.data;
  } catch (error) {
    console.error("Error in employee onboarding:", error);
    throw new Error("Onboarding process failed.");
  }
};
