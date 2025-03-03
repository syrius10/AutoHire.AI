import axios from "axios";

// AI model for contract performance monitoring.

/**
 * Calls AI model to monitor contract execution & performance.
 */
export const monitorContractPerformance = async (contractId) => {
  try {
    const response = await axios.post("http://localhost:5116/monitor-contract-performance", {
      contractId,
    });

    return response.data;
  } catch (error) {
    console.error("Error monitoring contract performance:", error);
    throw new Error("Failed to monitor contract performance.");
  }
};
