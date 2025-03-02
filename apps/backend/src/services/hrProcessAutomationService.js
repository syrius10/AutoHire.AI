import axios from "axios";

// Calls AI model for automating HR workflows

/**
 * Calls AI model to automate HR processes.
 */
export const automateHRProcess = async (tenure, performanceScore, promotions, salary) => {
  try {
    const response = await axios.post("http://localhost:5107/hr-automation", {
      tenure,
      performanceScore,
      promotions,
      salary,
    });
    return response.data;
  } catch (error) {
    console.error("Error automating HR process:", error);
    throw new Error("HR process automation failed.");
  }
};
