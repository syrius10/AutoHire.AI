import axios from "axios";

// Provides AI-powered salary benchmarking across different countries.

/**
 * Calls AI model to get salary benchmarks for different countries.
 */
export const getSalaryBenchmark = async (economyScore, industryDemand, experience) => {
  try {
    const response = await axios.post("http://localhost:5081/salary-benchmark", {
      economyScore,
      industryDemand,
      experience,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching salary benchmark:", error);
    throw new Error("Salary benchmarking failed.");
  }
};
