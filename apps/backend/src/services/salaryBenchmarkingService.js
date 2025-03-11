import axios from "axios";

// Fetches AI-driven salary benchmarks

export const getSalaryBenchmark = async (
  role,
  experience,
  industry,
  location,
) => {
  try {
    const response = await axios.post(
      "http://localhost:5060/salary-benchmark",
      {
        role,
        experience,
        industry,
        location,
      },
    );
    return response.data.predictedSalary;
  } catch (error) {
    console.error("Error fetching salary benchmarking data:", error);
    throw new Error("Failed to retrieve salary benchmarks.");
  }
};
