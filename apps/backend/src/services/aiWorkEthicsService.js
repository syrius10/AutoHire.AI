import fetch from "node-fetch";

// Calls AI to enforce work ethics policies

export const checkWorkEthics = async () => {
  const response = await fetch("http://localhost:5143/ai-work-ethics");
  return response.json();
};
