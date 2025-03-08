import fetch from "node-fetch";

// Provides AI-driven policy creation

export const generateWorkforcePolicy = async () => {
  const response = await fetch("http://localhost:5145/ai-autonomous-policy");
  return response.json();
};
