// Retrieves AI-driven ethical workforce management reports.

export const fetchEthicalEvaluation = async (inputData) => {
  const response = await fetch("/api/ethical-ai-workforce/evaluate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(inputData),
  });
  return response.json();
};
