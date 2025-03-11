import joblib from "joblib";

// Fetches AI-driven quantum workforce forecasting & predictive analytics.

/**
 * Loads pre-trained workforce forecasting model.
 */
const model = joblib.load("../ai-services/quantum_workforce_forecast.pkl");

export async function forecastQuantumWorkforce(
  economicGrowth,
  aiAdoption,
  hiringRate,
) {
  try {
    const prediction = model.predict([
      [economicGrowth, aiAdoption, hiringRate],
    ])[0];
    return { workforceDemand: Math.round(prediction) };
  } catch (error) {
    console.error("Error in Workforce Forecasting:", error);
    throw new Error("Prediction failed");
  }
}
