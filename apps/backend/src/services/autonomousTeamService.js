import axios from "axios";

// Calls AI model for self-organizing work teams

/**
 * Calls AI model to assign an employee to the optimal team
 */
export const assignTeam = async (experience, skill, teamwork) => {
  try {
    const response = await axios.post("http://localhost:5096/assign-team", {
      experience,
      skill,
      teamwork,
    });
    return response.data.assignedTeam;
  } catch (error) {
    console.error("Error assigning team:", error);
    throw new Error("Team assignment failed.");
  }
};
