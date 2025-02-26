import axios from "axios";

// Retrieves AI-powered salary benchmarks.

export const fetchSalaryBenchmarking = async () => {
  try {
    const response = await axios.get("/api/salary-benchmarking");
    return response.data;
  } catch (error) {
    console.error("Error fetching salary benchmarking data:", error);
    return [];
  }
};
