import axios from "axios";

// Detects hiring biases & enforces fair recruitment practices

/**
 * Calls AI model to detect hiring bias.
 */
export const detectBias = async (hiringData) => {
  try {
    const response = await axios.post("http://localhost:5084/detect_bias", hiringData);
    return response.data;
  } catch (error) {
    console.error("Error detecting hiring bias:", error);
    throw new Error("Failed to detect hiring bias.");
  }
};
