import axios from "axios";

// Calls AI model for automated HR workflows & employee management.

/**
 * Calls AI HR automation model for hiring, payroll, and onboarding processes.
 */
export const processHRAutomation = async (hrData) => {
  try {
    const response = await axios.post(
      "http://localhost:5078/process_hr",
      hrData,
    );
    return response.data;
  } catch (error) {
    console.error("HR Automation AI Error:", error);
    throw new Error("HR automation process failed.");
  }
};
