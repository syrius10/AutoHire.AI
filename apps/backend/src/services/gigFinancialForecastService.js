import gigFinancialForecastAI from "../../ai-services/gigFinancialForecastAI.js";

// Provides AI-driven financial forecasting.

export const predictFutureIncome = async (pastIncome) => {
  return gigFinancialForecastAI.predict_future_income(pastIncome);
};
