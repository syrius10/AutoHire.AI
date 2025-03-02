import axios from "axios";

// Fetches AI-powered task delegation & workload balancing

/**
 * Calls AI model to determine task assignment priority
 */
export const assignTask = async (skill, workload, complexity) => {
  try {
    const response = await axios.post("http://localhost:5097/assign-task", {
      skill,
      workload,
      complexity,
    });
    return response.data.taskPriority;
  } catch (error) {
    console.error("Error assigning task:", error);
    throw new Error("Task delegation failed.");
  }
};
