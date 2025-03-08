// Retrieves AI-powered employer-employee match data

export const fetchEmployerMatch = async () => {
    const response = await fetch("/api/ai-employer-match/match", { method: "POST" });
    return response.json();
  };
  