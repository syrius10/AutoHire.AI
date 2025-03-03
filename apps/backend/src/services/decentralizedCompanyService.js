import { DecentralizedCompanyAI } from "../../ai-services/decentralizedCompanyAI.js";

// Handles AI-driven self-managed decentralized companies.

const dao = new DecentralizedCompanyAI();

export const proposeProject = async (projectName, budget, expectedOutcome) => {
  return dao.propose_project(projectName, budget, expectedOutcome);
};

export const allocateBudget = async (projectId, amount) => {
  return dao.allocate_budget(projectId, amount);
};

export const getCompanyStatus = async () => {
  return dao.get_company_status();
};
