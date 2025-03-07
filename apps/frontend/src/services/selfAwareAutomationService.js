// Calls AI for self-aware workforce automation tracking.

export const fetchSelfAwareAutomation = async (metrics) => {
    const response = await fetch("/api/self-aware-automation/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(metrics),
    });
    return response.json();
  };
  