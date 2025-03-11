import axios from "axios";

// Optimizes internal mobility using AI analytics

/**
 * Calls AI model to analyze talent distribution and suggest internal workforce optimizations.
 */
export const redistributeTalent = async (
  currentWorkforce,
  departmentProductivity,
  employeeOverload,
) => {
  try {
    const response = await axios.post(
      "http://localhost:5069/redistribute_talent",
      {
        current_workforce: currentWorkforce,
        department_productivity: departmentProductivity,
        employee_overload: employeeOverload,
      },
    );
    return response.data;
  } catch (error) {
    console.error("Error in talent redistribution:", error);
    throw new Error("Talent redistribution failed.");
  }
};
