import { callAIModel } from "../utils/aiServiceCaller.js"; // AI model integration

// Matches employers & candidates using AI

export const matchCandidateWithEmployer = async (
  candidateSkills,
  companyRequirements,
  salaryExpectation,
  workFlexibility,
) => {
  const payload = {
    candidateSkills,
    companyRequirements,
    salaryExpectation,
    workFlexibility,
  };
  return await callAIModel("aiEmployerMatchAI", payload);
};
