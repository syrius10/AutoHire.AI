import axios from "axios";

// Handles AI-driven workforce cost forecasting.

/**
 * Fetch workforce hiring cost & budget predictions from AI service.
 */
export const getCostForecast = async () => {
  try {
    const response = await axios.get(
      "http://localhost:5031/workforce-cost-forecast",
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching workforce cost forecast:", error);
    throw new Error("Failed to retrieve cost predictions.");
  }
};
