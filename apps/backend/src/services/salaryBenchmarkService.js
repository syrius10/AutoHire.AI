import axios from "axios";

const API_URL = "https://api.salary.com/v1/benchmarks";

export const getRegionalSalary = async (role, location, currency) => {
  try {
    const response = await axios.get(API_URL, {
      params: { role, location, currency },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching salary benchmarks: ", error);
    return { salary: "Data unavailable" };
  }
};
