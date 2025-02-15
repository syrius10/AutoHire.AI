import axios from "axios";

const API_URL = "http://localhost:5001/api/salary";

// ✅ Fetch Salary Growth Predictions
export const fetchSalaryGrowth = async (role, experience) => {
    const response = await axios.get(`${API_URL}/growth`, { params: { role, experience } });
    return response.data;
};

// ✅ Fetch Salary Benchmark Data (New Function)
export const fetchBenchmarkSalary = async (role, location) => {
    try {
      const response = await axios.get(`${API_URL}/benchmark`, { params: { role, location } });
      return response.data;
    } catch (error) {
      console.error("Error fetching salary benchmark data:", error);
      return null;
    }
};