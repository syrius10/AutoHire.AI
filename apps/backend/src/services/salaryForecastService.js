import axios from "axios";

const SALARY_API = "https://api.salary.com/v1/projections";
const JOB_DEMAND_API = "https://api.jobs.com/v1/trends";

export const getSalaryForecast = async (jobTitle, location) => {
  try {
    const response = await axios.get(SALARY_API, {
      params: { jobTitle, location },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching salary forecast: ", error);
    return { salaryGrowth: "Unavailable" };
  }
};

export const getJobDemandForecast = async (jobTitle) => {
  try {
    const response = await axios.get(JOB_DEMAND_API, { params: { jobTitle } });
    return response.data;
  } catch (error) {
    console.error("Error fetching job demand forecast: ", error);
    return { demandProjection: "Unavailable" };
  }
};
