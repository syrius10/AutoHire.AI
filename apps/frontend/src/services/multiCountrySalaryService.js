import axios from "axios";

// Retrieves AI-driven salary benchmarking for multiple countries.

/**
 * Calls backend API to fetch AI-powered salary benchmarking.
 */
export const fetchSalaryBenchmark = async (params) => {
  try {
    const response = await axios.post(
      "/api/multi-country-salary/benchmark",
      params,
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching salary benchmarking:", error);
    throw new Error("Failed to fetch salary benchmarking.");
  }
};
