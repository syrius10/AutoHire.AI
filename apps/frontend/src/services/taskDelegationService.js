import axios from "axios";

// Retrieves AI-powered task allocation & optimization insights

/**
 * Fetches AI-generated task delegation insights.
 */
export const fetchTaskDelegation = async () => {
  try {
    const response = await axios.get("/api/task-delegation/assign");
    return response.data.tasks;
  } catch (error) {
    console.error("Error fetching task delegation:", error);
    return [];
  }
};
