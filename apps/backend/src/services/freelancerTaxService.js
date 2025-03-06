import freelancerTaxAI from "../../ai-services/freelancerTaxAI.js";

// Fetches AI-powered tax planning recommendations.

export const estimateTaxes = async (annualIncome, deductions) => {
  return freelancerTaxAI.estimate_taxes(annualIncome, deductions);
};
