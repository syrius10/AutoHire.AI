import axios from "axios";

const API_URL = "http://ocalhost:5001/api/career";

// ✅ Fetch AI-Powered Career Path Predictions
export const getCareerPrediction = async (jobTitle, experience) => {
  try {
    const response = await axios.post(`${API_URL}/predict`, {
      job_title: jobTitle,
      experience,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching career predictions: ", error);
    return { career_paths: "No data available." };
  }
};

// ✅ Fetch Salary Forecast Data
export const getSalaryForecast = async (jobTitle, location) => {
  try {
    const response = await axios.post(`${API_URL}/salary_forecast`, {
      job_title: jobTitle,
      location,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching salary forecats: ", error);
    return { salaryGrowth: "No data available." };
  }
};

// ✅ Fetch Job Demand Forecast Data
export const getJobDemandForecast = async (jobTitle) => {
  try {
    const response = await axios.post(`${API_URL}/job_demand`, {
      job_title: jobTitle,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching job demand forecast: ", error);
    return { demandProjection: "No data available." };
  }
};
