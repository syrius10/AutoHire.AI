import axios from "axios";

// Provides AI-driven employer-employee economic projections.

/**
 * Calls AI model for economic forecasting.
 */
export const getEconomicForecast = async (
  avgSalary,
  costOfLiving,
  inflationRate,
) => {
  try {
    const response = await axios.post(
      "http://localhost:5121/economic-forecast",
      {
        avg_salary: avgSalary,
        cost_of_living: costOfLiving,
        inflation_rate: inflationRate,
      },
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching economic forecast:", error);
    throw new Error("AI economic forecasting failed.");
  }
};
