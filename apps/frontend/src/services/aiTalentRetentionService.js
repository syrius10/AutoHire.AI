// Retrieves AI-powered workforce retention predictions.

export const fetchRetentionPredictions = async () => {
    try {
      const response = await fetch("/api/ai-talent-retention/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ workload: 3, satisfaction: 4, careerGrowth: 5, workLifeBalance: 4 }),
      });
      return await response.json();
    } catch (error) {
      console.error("Error fetching retention predictions:", error);
      return { error: "Failed to retrieve retention forecasts." };
    }
  };
  