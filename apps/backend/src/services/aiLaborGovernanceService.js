import fetch from "node-fetch";

// Tracks AI-based labor law compliance

export const checkLaborCompliance = async () => {
  const response = await fetch("http://localhost:5144/ai-labor-governance");
  return response.json();
};
