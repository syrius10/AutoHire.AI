// Fetches AI-driven hiring automation insights

export const fetchAutomatedHiring = async () => {
    const response = await fetch("/api/ai-automated-hiring/evaluate", { method: "POST" });
    return response.json();
  };
  