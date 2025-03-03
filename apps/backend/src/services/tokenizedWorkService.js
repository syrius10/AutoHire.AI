import { TokenizedWorkAI } from "../../ai-services/tokenizedWorkAI.js";

// Manages AI-powered tokenized work rewards.

const tokenAI = new TokenizedWorkAI();

export const assignTokens = async (userId, workHours, projectComplexity, skillLevel) => {
  return tokenAI.assign_tokens(userId, workHours, projectComplexity, skillLevel);
};

export const getUserBalance = async (userId) => {
  return tokenAI.get_user_balance(userId);
};
