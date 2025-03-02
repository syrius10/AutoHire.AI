import axios from "axios";

// Fetches AI-powered workflow automation recommendations

/**
 * Calls AI model to optimize workflow automation.
 */
export const automateWorkflow = async (taskComplexity, taskUrgency, availableStaff) => {
  try {
    const response = await axios.post("http://localhost:5109/workflow-automation", {
      taskComplexity,
      taskUrgency,
      availableStaff,
    });
    return response.data;
  } catch (error) {
    console.error("Error automating workflow:", error);
    throw new Error("Workflow automation failed.");
  }
};
