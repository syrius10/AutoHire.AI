import axios from "axios";

// Retrieves AI-powered contract performance analytics

/**
 * Calls AI to monitor contract execution & performance.
 */
export const monitorContractPerformance = async (contractId) => {
  try {
    const response = await axios.post("/api/contract-performance/monitor", {
      contractId,
    });
    return response.data;
  } catch (error) {
    console.error("Error monitoring contract performance:", error);
    throw new Error("Failed to monitor contract performance.");
  }
};
