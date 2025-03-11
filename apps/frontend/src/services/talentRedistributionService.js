import axios from "axios";

// Calls AI for internal talent redistribution & optimization

export const fetchTalentRedistribution = async (
  currentWorkforce,
  departmentProductivity,
  employeeOverload,
) => {
  try {
    const response = await axios.post("/api/talent-redistribution/optimize", {
      currentWorkforce,
      departmentProductivity,
      employeeOverload,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching talent redistribution plan:", error);
    throw error;
  }
};
