import { callAIModel } from "../utils/aiServiceCaller.js"; // AI model integration

// Calls AI model to automate global hiring process

export const automateHiring = async (skills, experience, culturalFit) => {
  const payload = { skills, experience, culturalFit };
  return await callAIModel("aiAutomatedHiringAI", payload);
};
