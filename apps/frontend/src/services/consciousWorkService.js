// Fetches AI-powered cognitive workforce decision-making insights.

export const fetchConsciousDecision = async (scenario) => {
    const response = await fetch("/api/conscious-work/decision", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ scenario }),
    });
    return response.json();
  };
  