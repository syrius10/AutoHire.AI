import axios from "axios";

/**
 * Calls backend API to assign a task and get AI vs Human delegation.
 */
export const assignTask = async (skillLevel, workload, complexity) => {
  try {
    const response = await axios.post(
      "http://localhost:5001/api/task-delegation/assign",
      { skillLevel, workload, complexity },
    );
    return response.data;
  } catch (error) {
    console.error("Error assigning task:", error);
    return { error: "Task delegation failed" };
  }
};
