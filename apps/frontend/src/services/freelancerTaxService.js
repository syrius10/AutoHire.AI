import axios from "axios";

// Calls AI for freelancer tax planning & deductions.

export const estimateFreelancerTaxes = async (annualIncome, deductions) => {
  try {
    const response = await axios.post("/api/freelancer-tax/estimate", {
      annualIncome,
      deductions,
    });
    return response.data.estimatedTax;
  } catch (error) {
    console.error("Error estimating freelancer taxes:", error);
    return 0;
  }
};
