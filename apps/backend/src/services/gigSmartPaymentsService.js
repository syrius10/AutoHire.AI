import gigSmartPaymentsAI from "../../ai-services/gigSmartPaymentsAI.js";

// Processes AI-based smart contract payments.

export const createSmartContract = async (freelancerId, employerId, amount) => {
  return gigSmartPaymentsAI.generate_smart_contract(freelancerId, employerId, amount);
};

export const releasePayment = async (contractId) => {
  return gigSmartPaymentsAI.release_payment(contractId);
};
