import { runPythonAIModel } from "../utils/pythonExecutor.js";

// Predicts freelancer earnings & job demand.

export const getEarningsForecast = async (data) => {
  return await runPythonAIModel("earnings_forecast_model.pkl", data);
};
